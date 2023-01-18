import validateForm from './validateForm.js'
import handleResponse from './handleResponse.js';
import { showError, hideError } from "./Error.js";

export default function submitForm(){

    // hide the error if it is already displayed

    if(!error.classList.contains("d-none")){
        hideError();
    }

    // getting user input from the form and validate it 

    const input = validateForm(); 

    if(input.error){
        message = "please fill in the required fields"
        showError(message);
        return;
    }



    const xhr = new XMLHttpRequest(); 

    const xml = `<AddressValidateRequest USERID="396SAMPO4385"><Revision>1</Revision><Address><Address1>${input.address}</Address1><Address2>${input.address2}</Address2><City>${input.city}</City><State>${input.state}</State><Zip5>${input.zip}</Zip5><Zip4></Zip4></Address></AddressValidateRequest>`




    const url = 'http://production.shippingapis.com/ShippingAPI.dll?API=Verify&xml=' + xml;

    xhr.open("get", url); 

    xhr.onreadystatechange = (e) => {
        if( xhr.status == 200 && xhr.readyState == 4 ){
            handleResponse(input, xhr.response);
        }

    }
    xhr.send(); 
}