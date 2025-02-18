document.getElementById("loginform").addEventListener("submit", (event) => {
    event.preventDefault(); 

    
    const username = document.getElementById("user").value;
    const password = document.getElementById("password").value;

   
    if (username === "admin" && password === "admin_01") {
       
        window.location.href = "menu.html";
    } else {
    
        document.getElementById("status").textContent = "Credenciales incorrectas. Intente de nuevo.";
        document.getElementById("status").style.color = "red";
    }
});
