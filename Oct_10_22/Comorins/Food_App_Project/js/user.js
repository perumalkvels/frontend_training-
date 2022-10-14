const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
let elementa;
let loginStatusa=JSON.parse(localStorage.getItem("login_status"));
if(name==loginStatusa.username || loginStatusa.username!=""){
elementa="<a class='nav-link'  href='#' ><span class='mr-3 h4 text-white p-0'>hi !</span><span class='text-warning h4' >"+loginStatusa.username+"</span><button class='badge user-logout badge-pill ml-3 badge-warning'onclick='userLogout()'><span class='p-4 text-center'>Logout<span></button></a> ";
document.getElementById("user_status").innerHTML=elementa;

}

function userLogout(){
    localStorage.removeItem("login_status");
    document.location.reload(true);
}

function isUserAlive(){
// alert("hai");
if(!localStorage.getItem("login_status")){
            alert("Please Login to Enter Cart");
        }
        else{
            
            window.location.href = "productCart.html";
        }
}