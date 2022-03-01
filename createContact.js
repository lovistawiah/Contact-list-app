export let arr = arr;
let object = {};
let arr = [];
let fname = document.getElementById("fname");
let lname = document.getElementById("lname");
let email = document.getElementById("email");
const button = document.querySelector("button");
button.addEventListener("click", (e) => {
    e.preventDefault();
    object.firstName = fname.value;
    object.lastName = lname.value;
    object.Email = email.value;
    arr.push(object);

});


document.getElementById("assign").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./index.html")
});
