import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

# Use a service account.
cred = credentials.Certificate("./mobileorder-7450d-firebase-adminsdk-h6rgp-2bd92c17f7.json")

app = firebase_admin.initialize_app(cred)

db = firestore.client()

doc_ref = db.collection("users").document("alovelace")
doc_ref.set({"first": "Ada", "last": "Lovelace", "born": 1815})
