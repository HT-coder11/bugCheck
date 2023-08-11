function addUser() {
    user_name= document.getElementById("user_name").value
    localStorage.setItem("user_name", user_name)
    //remember "user_name" might need changing
    window.location="kwitter_room.html"
}