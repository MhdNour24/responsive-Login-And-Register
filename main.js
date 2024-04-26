var a =document.getElementById("loginBtn");
var b =document.getElementById("registerBtn");
var x =document.getElementById("login");
var y =document.getElementById("register");

function login() {
    x.style.left="4px";
    y.style.right="-520px";
    a.classList.add("white-btn");
    b.className="btn";
    x.style.opacity=1;
    y.style.opacity=0;

}
function register() {
    x.style.left="-510px";
    y.style.right="5px";
    b.classList.add("white-btn")
    a.className="btn"
    x.style.opacity=0;
    y.style.opacity=1;
}

function myMenuFunction() {
    var i =document.getElementById("navMenu")
    if (i.className === "nav-menu") {
        i.classList.add("responsive")
    } else {
        i.className="nav-menu"
    }
}