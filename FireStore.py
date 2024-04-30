import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore
import datetime

dt = datetime.datetime.now()
# Use a service account.
cred = credentials.Certificate("./mobileorder-7450d-firebase-adminsdk-h6rgp-2bd92c17f7.json")

app = firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref_num = db.collection(str(dt.date())+"order_num").document("number")
doc = doc_ref_num.get()
if doc.exists == False:
    doc_ref_num.set({"order_num": 1})
doc = doc.to_dict()
order_num = doc["order_num"]
print(order_num)
doc_ref_num.set({"order_num": order_num+1})
