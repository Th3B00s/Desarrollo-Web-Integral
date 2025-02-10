document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault(); // Evita que la página se recargue

    // Redirige directamente a la página del menú
    window.location.href = "menu.html";
});
