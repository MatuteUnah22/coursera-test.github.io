var settingsmenu = document.querySelector(".settings-menu");
var darkBtn = document.getElementById("dark-btn"); //Variable para obtener el ID del botón del modo  oscuro/claro

function settingsMenuToggle() {
    settingsmenu.classList.toggle("settings-menu-height");
}

//Función para el botón de oscuro/claro
darkBtn.onclick = function(){
    darkBtn.classList.toggle("dark-btn-on"); //Desliza de izq a derecha
    document.body.classList.toggle("dark-theme"); //Obtiene lo que se encuentra en los estilos

    if (localStorage.getItem("theme") == "light") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }
}

//Valida si esta en un modo selecionado, para cuando se actualice la pág 
//siga en ese mismo modo, y aunque se cierre el nav, seguirá en el mismo modo
if (localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-btn-on");
    document.body.classList.remove("dark-theme");
} else if(localStorage.getItem("theme") == "dark"){
    darkBtn.classList.add("dark-btn-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "light");
}

for (let i = 0; i < 100; i++) {
    numero += 1;
    if (numero % 3 == 0) {
        console.log("FIZZ");
    } else if (numero % 5 == 0) {
        console.log("BUZZ");
    }
    console.log(numero);
}

let elNumero = 0;
for (let i = 1; i <= 100; i = i + 1) {
    elNumero = elNumero + 1;
    if (elNumero % 3 == 0 && elNumero % 5 == 0) {
        console.log(i + " FizzBuzz") 
    } else if (elNumero % 3 == 0) {
        console.log(i + " FIZZ");
    } else if (elNumero % 5 == 0) {
        console.log(i + " BUZZ");
    }
    console.log(elNumero);
}

let hashtag = "";
let space = "";

for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {
        console.log(1);
        
    }
    
}