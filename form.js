var firebaseConfig = {
  apiKey: "AIzaSyA1SnUXJ14nxDA1GAd1E4_0K1K9ttWbwxQ",
  authDomain: "calories1-e7768.firebaseapp.com",
  databaseURL: "https://calories1-e7768.firebaseio.com",
  projectId: "calories1-e7768",
  storageBucket: "calories1-e7768.appspot.com",
  messagingSenderId: "971873450456",
  appId: "1:971873450456:web:3a93ea1a9f3fd372e29aad",
  measurementId: "G-65QH42MRNX"
};
//const  auth = firebase.auth();
function signUp(){
  var email = document.getElementById("email");
  var password = document.getElementById("password");
  //const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  //promise.catch(e => alert(e.message));
  alert("Signed Up");
}
function signIn(){
   var email = document.getElementById("email");
  var password = document.getElementById("password");
  //const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  //promise.catch(e => alert(e.message));
  alert("Signed In" + email.value);
}
function signOut(){
 // auth.signOut();
  alert("Signed Out");
}