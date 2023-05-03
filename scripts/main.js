const input = document.getElementById("password");
input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        verifyPassword();
    }
});

function verifyPassword() {
    const input = document.getElementById("password").value;
    if (input == "hasło") {
        document.getElementById("secret").innerHTML = "Poprawne";
    } else {
        document.getElementById("secret").innerHTML = "Błędne";
    }
}