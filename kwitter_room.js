
//ADD YOUR FIREBASE LINKS HERE
var user_name=localStorage.getItem ("user_name");
document.getElementById("user_name").innerHTML=user_name;

function add_room(){
room_name=document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose:"addinguser"
      });
 localStorage.setItem("room_name", room_name);
window.location="kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room_names"+ Room_names);
      row="<div class='room_name' id="+Room_names+"onclick='redirect(this.id)'>"+Room_names+"</div>";
      document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
function redirect(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location="kwitter_page.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="index.html";
}