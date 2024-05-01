from flask import Flask, render_template,request,redirect
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

app = Flask(__name__,static_folder="./templates/static/")

cred = credentials.Certificate("./mobileorder-7450d-firebase-adminsdk-h6rgp-2bd92c17f7.json")

firebase_app = firebase_admin.initialize_app(cred)
db = firestore.client()
dt = datetime.datetime.now()
doc_ref = db.collection(str(dt.date()))
doc_ref_num = db.collection(str(dt.date())+"order_num").document("number")
doc = doc_ref_num.get()
if doc.exists == False:
    doc_ref_num.set({"order_num": 1})
    doc = doc_ref_num.get()
doc_number = doc.to_dict()
@app.route("/",methods=["GET"])
def redirect_to_order():
    return redirect("/order")
@app.route('/order',methods=['GET'])
def order():
     if request.method == 'GET':
        res = render_template("menu.html")
        return res
@app.route('/orderpost',methods=['POST','GET'])
def orderpost():
    doc = doc_ref_num.get()
    doc_number = doc.to_dict()
    menuname = request.form["menuname"]
    menuoption = request.form["menuoption"]
    img = request.form["img_source"]
    now_order_num = doc_number["order_num"]
    doc_ref_num.set({"order_num": now_order_num+1})
    doc_ref.add({"menu": menuname, "option": menuoption, "ordernumber": now_order_num})
    return render_template("order_complete.html",menuname=menuname,menuoption=menuoption,order_num=now_order_num,img_source=img)
@app.route("/admin")
def hello():
    docs = doc_ref.stream()
    menu_list=[]
    option_list=[]
    order_num_list = []
    for doc in docs:
        ref = doc.to_dict()
        menu_list.append(ref["menu"])
        option_list.append(ref["option"])
        order_num_list.append(ref["ordernumber"])
    combine = [menu_list,option_list,order_num_list]
    info_list=[]
    for j in range(len(menu_list)):
        info = []
        for i in range(3):
            info.append(combine[i][j])
        info_list.append(info)
    list_len = len(menu_list)
    for i in info_list:
        print(i)
    return render_template("admin.html",info_list=info_list,list_len=list_len)

if __name__ == "__main__":
    app.run(host='0.0.0.0',port="5000")
