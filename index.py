from flask import Flask, render_template,request
from markupsafe import escape
import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

app = Flask(__name__,static_folder="./templates/static/")

cred = credentials.Certificate("./mobileorder-7450d-firebase-adminsdk-h6rgp-2bd92c17f7.json")

firebase_app = firebase_admin.initialize_app(cred)

db = firestore.client()
doc_ref = db.collection("users").document("alovelace")
@app.route('/',methods=['GET', 'POST'])
def hello_world():
    #  MenuName = request.form.get("orderbtn")
     if request.method == 'GET':
        res = render_template("menu.html")
     elif request.method == "POST":
        # selected_menuname = request.form.get('selected_menuname')
        # menuoption = request.form.get('menuoption')
        doc_ref.set({"first": "aaaaa", "last": "aaaaa", "born": 1815})
        res = render_template("menu.html")
     return res
@app.route("/admin")
def hello():
    body = request.get_data()
    print(body)
    return render_template("menu.html")

if __name__ == "__main__":
    app.run()