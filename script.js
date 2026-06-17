function registerUser() {

    let username =
        document.getElementById("username").value;

    let email =
        document.getElementById("email").value;

    let password =
        document.getElementById("password").value;

    if(
        username === "" ||
        email === "" ||
        password === ""
    ){
        alert("Please fill all required fields");
        return false;
    }

    window.location.href = "Dashboard.html";

    return false;
}
