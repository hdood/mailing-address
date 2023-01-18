import submitForm from './submitForm.js';


const userName = "396SAMPO4385";

const form = document.forms.mailingForm;

form.addEventListener("submit", e => {

    // preventing form from reloading the page
    e.preventDefault(); 

    submitForm(); 

})



