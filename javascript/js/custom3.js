"use strict";
////var u_name = document.myform.u_name;
////var u_pass = document.myform.u_pass;


////var Username = "Bhushan_Surjuse";
////var Password = '@123';

////function runMe(){
////    if(u_name.value==Username && u_pass.value==Password)
////    {
////        console.log("Login Sucess!!");
////    }
////    else
////    {
 ////       console.log("Login Error!");
////    }
//}

//Validation Form

var u_name = document.myform.u_name;
var message = document.getElementById("message");

function runMe(){
    if (u_name.value.length < 3)
    {
        message.innerHTML = "Need more Characters!";
        message.style.color = "red";
        u_name.style.backgroundColor = "teal";
        u_name.style.color = "white";
    }else if(u_name.value.length === 5){
        message.innerHTML = "It's Nice!";
        message.style.color = "green";
        u_name.style.backgroundColor = "green";
        u_name.style.color = "white";
    }
    else if(u_name.value.length >8){
        message.innerHTML = "Limit has been reached!";
        message.style.color = "orange";
        u_name.style.backgroundColor = "red";
        u_name.style.color = "white";
    }
}

//minified above code(makes easier to load) !! 

//var u_name=document.myform.u_name;var message=document.getElementById('message');function runMe(){if(u_name.value.length<3) {message.innerHTML="Need more Characters!";message.style.color='red';u_name.style.backgroundColor="teal";u_name.style.color='white';}else if(u_name.value.length==5){message.innerHTML="It's Nice!";message.style.color='green';u_name.style.backgroundColor="green";u_name.style.color='white';} else if(u_name.value.length>8){message.innerHTML="Limit has been reached!";message.style.color='orange';u_name.style.backgroundColor="red";u_name.style.color='white';}}//

//ideal JS code




/// for speed up ur coding use js library