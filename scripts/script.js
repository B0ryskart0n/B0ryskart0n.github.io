const input = document.getElementById("password");
input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        verifyPassword();
    }
});

function verifyPassword() {
    const input = document.getElementById("password").value;
    if (input == "narzeczeni") {
        document.location.replace("pages/main.html");
    }
}