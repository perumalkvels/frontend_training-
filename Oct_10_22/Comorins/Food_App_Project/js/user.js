const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userName = urlParams.get('name');

let element;
let loginStatus = JSON.parse(localStorage.getItem("login_status"));
if (userName == loginStatus.username || loginStatus.username != "") {
    element = "<a class='nav-link'  href='#' ><span class='mr-3 h4 text-white p-0'>hi !</span><span class='text-warning h4' >" + loginStatus.username + "</span><button class='badge user-logout badge-pill ml-3 badge-warning'onclick='userLogout()'><span class='p-4 text-center'>Logout<span></button></a> ";
    document.getElementById("user_status").innerHTML = element;
}

// Function Define for User Login

function userLogout() {
    localStorage.removeItem("login_status");
    localStorage.removeItem("Order_Items");
    document.location.reload(true);
}

// Function Define for Check Is User is Available

function isUserAlive() {
    if (!localStorage.getItem("login_status")) {
        alert("Please Login to Enter Cart");
        window.location.href = "login.html";
    }
    else {

        window.location.href = "productCart.html";
    }
}
