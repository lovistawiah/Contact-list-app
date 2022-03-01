import arr from './app.js'
document.getElementById("assign").addEventListener("click", (e) => {
    e.preventDefault();
    window.location.assign("./createContact.html")
});

if (arr != null) {
    for (let obj of arr) {
        console.log(obj);
    }
}
