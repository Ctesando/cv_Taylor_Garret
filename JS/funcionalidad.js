
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const company = document.getElementById("company");
const phone = document.getElementById("phone");
const form = document.getElementById("form");
const parrafo = document.getElementById("warnings");

form.addEventListener("submit", e=> {
    e.preventDefault()
    let warnings = ""
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    parrafo.innerHTML = ""
    if(name.value.length <4){
        warnings += `El nombre no es válido <br>`
        entrar = true
    }
    console.log(regexEmail.test(email.value))
    if(!regexEmail.test(email.value)){
        warnings += `El email no es válido <br>`
        entrar = true
    }
    if(company.value.length <3){
        warnings += `El nombre de la Empresa no es válido <br>` 
        entrar = true
    }
    if(message.value.length <3){
        warnings += `El mensaje debe ser más largo <br>` 
        entrar = true
    }
    
    
   
    if (name.value == "" || company.value == "" || email.value == "" || message.value == "" || phone.value == ""){
        alert("Todos los campos son obligatorios");
        return false;
    }
    if (isNaN(phone.value)){
        alert("El campo teléfono debe ser numérico");
        return false;
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
 
})
