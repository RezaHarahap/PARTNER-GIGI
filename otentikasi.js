function login() {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "adminpartnergigi@gmail.com" && password == "partnergigi") {

        alert("Selamat Datang Admin!");
        location.replace("Boking.html");
    } else {
        alert("Selamat Datang!");
        location.replace("index.html");
    }
}
