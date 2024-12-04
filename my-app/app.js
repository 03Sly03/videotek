document.addEventListener('DOMContentLoaded', function() {
    // créer une simulation de catalogue
    
    // Générer le contenu du catalogue

});

// validation form contact

const pseudo = document.getElementById('pseudo');
const email = document.getElementById('email');
const message = document.getElementById('message');
const form = document.getElementById('form');
const pseudo_error = document.getElementById('pseudo_error');
const email_error = document.getElementById('email_error');
const message_error = document.getElementById('message_error');
const email_check = "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$";




form.addEventListener('submit',(e)=>
{
    if(pseudo.value === '' || pseudo.value == null){

        e.preventDefault();
        pseudo_error.innerHTML = "pseudo est obligatoire";

    }else{
        pseudo_error.innerHTML = "";
    }

    if(!email.value.match(email_check)){

        e.preventDefault();
        email_error.innerHTML = "email est obligatoire";

    }else{
        email_error.innerHTML = "";

    }

    if(message.value === '' || message.value == null){

        e.preventDefault();
        message_error.innerHTML = "message est obligatoire";

    }else{
        message_error.innerHTML = "";
    }

})