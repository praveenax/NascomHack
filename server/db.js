const admin = require("firebase-admin");

var serviceAccount = require("./admin.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://gjden-ac410.firebaseio.com",
  authDomain: "gjden.firebaseapp.com",
});

var db=admin.database();
var userRef=db.ref("remedic");

userRef.once('value',function(snap){
    console.log(snap.val())
    // res.status(200).json({"users":snap.val()});
})

// userRef.on('child_added', (snapshot, prevChildKey) => {
//     // const newPost = snapshot.val();
//     console.log(snapshot.val())
//   });