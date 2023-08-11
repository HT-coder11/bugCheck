
const firebaseConfig = {
      apiKey: "AIzaSyDORvYgd_0_Qf4kptsJenLtIQ1CGDDbVfU",
  authDomain: "kwitter-990c7.firebaseapp.com",
  databaseURL: "https://kwitter-990c7-default-rtdb.firebaseio.com",
  projectId: "kwitter-990c7",
  storageBucket: "kwitter-990c7.appspot.com",
  messagingSenderId: "50456992471",
  appId: "1:50456992471:web:4b795c1ebaa7f87fa1ee92"
    };
firebase.initializeApp(firebaseConfig)

user_name=localStorage.getItem("user_name")
document.getElementById("user_name").innerHTML  = "Welcome "+user_name + " !:)"



function addKwitterRoom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpous:"Adding Room Name"    
      });
      localStorage.setItem("room_name",room_name)
      window.location="kwitter_page.html"
      
}



function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
     console.log(Room_names)
     row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+ Room_names+"</div><hr>";
     document.getElementById("output").innerHTML += row;
     });});}
getData();

function redirectToRoomName(name){
      localStorage.setItem("room_name",name)
      window.location="kwitter_page.html"
}

function logout(){
      localStorage.removeItem('room_name')
      localStorage.removeItem('user_name')
      window.location="index.html"
}