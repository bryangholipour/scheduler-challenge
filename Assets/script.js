var timeNow= moment().format("hh:m A");
var dateNow= moment().format("MMM D");
$("#now").text(timeNow);
$("#date").text(dateNow);

// function present(){
    
// }
// function past(){
//     document.getElementsByClassName(".past")
// }
// function future(){
//     document.getElementsByClassName(".future")
// }

// if (timeNow >= 19 && timeNow <= 20){
//     document.getElementById("#saveBtn2")= (".present");
// }


// if (timeNow >= 10 && timeNow <= 11)

// if (timeNow >= 11 && timeNow <= 12)

// if (timeNow >= 12 && timeNow <= 13)

// if (timeNow >= 13 && timeNow <= 14)

// if (timeNow >= 14 && timeNow <= 15){
// }
   
// if (timeNow >= 15 && timeNow <= 16){

// }

// if (timeNow >= 16 && timeNow <= 17)

// if (timeNow >= 17 && timeNow <= 18)

// if (timeNow >= 19 && timeNow <=20)

// function saveData() {
//     var eventText = localStorage.getitem("#eventText")
// }


// var saveBtn2 = document.querySelector("#saveBtn2");
// var saveBtn3 = document.querySelector("#saveBtn3");
// var saveBtn4 = document.querySelector("#saveBtn4");
// var saveBtn5 = document.querySelector("#saveBtn5");
// var saveBtn6 = document.querySelector("#saveBtn6");
// var saveBtn7 = document.querySelector("#saveBtn7");
// var saveBtn8 = document.querySelector("#saveBtn8");
// var saveBtn9 = document.querySelector("#saveBtn9");

// var clickHandler3 = function (event) {

// }



// saveBtn1.addeventlistener("click" , function(event) {
//     event.preventDefault();
//     var saveBtn1 = document.querySelector("#eventText1").value;
//     localStorage.setItem("eventText1", saveBtn1)
// });


// saveBtn2.addeventlistener("click" , function(){
//     localstorage
// })
// saveBtn3.addeventlistener("click" ,clickHandler3 )
// saveBtn4.addeventlistener("click" , )
// saveBtn5.addeventlistener("click" , )
// saveBtn6.addeventlistener("click" , )
// saveBtn7.addeventlistener("click" , )
// saveBtn8.addeventlistener("click" , )
// saveBtn9.addeventlistener("click" , )

// fetchButton.addEventListener('click', getApi);


// var emailInput = document.querySelector("#email");
// var passwordInput = document.querySelector("#password");
// var signUpButton = document.querySelector("#sign-up");
// var msgDiv = document.querySelector("#msg");
// var userEmailSpan = document.querySelector("#user-email");
// var userPasswordSpan = document.querySelector("#user-password");


// renderLastRegistered();

// function displayMessage(type, message) {
//   msgDiv.textContent = message;
//   msgDiv.setAttribute("class", type);
// }

// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }

// signUpButton.addEventListener("click", function(event) {
//   event.preventDefault();

//   var email = document.querySelector("#email").value;
//   var password = document.querySelector("#password").value;

//   if (email === "") {
//     displayMessage("error", "Email cannot be blank");
//   } else if (password === "") {
//     displayMessage("error", "Password cannot be blank");
//   } else {
//     displayMessage("success", "Registered successfully");

//     localStorage.setItem("email", email);
//     localStorage.setItem("password", password);
//     renderLastRegistered();
//   }
// });