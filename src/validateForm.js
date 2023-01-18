export default function validateForm(){

    // getting user input

    const address = document.forms.mailingForm.address.value; 
    const address2 = document.forms.mailingForm.address2.value; 
    const city = document.forms.mailingForm.city.value; 
    const state = document.forms.mailingForm.state.value; 
    const zip = document.forms.mailingForm.zip.value; 




    // check if one of the required field is empty

    if(address == "" || city == "" || state == "null" || zip== ""){
        console.log(error)
        return {
            error : true
        }
    }

    // return the validated input as an object

    return {
        address,
        address2,
        city,
        state,
        zip
    }
}