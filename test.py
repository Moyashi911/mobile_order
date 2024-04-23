import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

cred = credentials.Certificate("./mobileorder-7450d-firebase-adminsdk-h6rgp-2bd92c17f7.json")

firebase_app = firebase_admin.initialize_app(cred)
order_num = 1
db = firestore.client()

docs = db.collection("2024-04-23").stream()
menu_list=[]
option_list=[]
order_num_list = []
combine = [menu_list,option_list,order_num_list]
info_list=[]
for doc in docs:
    ref = doc.to_dict()
    menu_list.append(ref["menu"])
    option_list.append(ref["option"])
    order_num_list.append(ref["ordernumber"])
for j in range(len(menu_list)):
    info = []
    for i in range(3):
        info.append(combine[i][j])
    info_list.append(info)
# print(info_list)
for i in range(len(menu_list)):
        print(info_list[i][0],info_list[i][1],info_list[i][2])
        print("--------")