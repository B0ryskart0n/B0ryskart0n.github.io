const input = document.getElementById("password");
input.addEventListener("keypress", e => {
    if (e.key === "Enter") {
        verifyPassword();
    }
});

function verifyPassword() {
    const input = document.getElementById("password").value;
    if (input == "piątek513trzynastego") {
        document.location.replace("pages/main.html");
    }
}