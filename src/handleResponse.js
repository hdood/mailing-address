import showModal from "./showModal.js"
import { showError } from "./Error.js";


export default function handleResponse(input, response){


    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(response,"text/xml");


    // check if the response caonrains errors

    if(xmlDoc.getElementsByTagName("Error")[0] != null){
        const message = xmlDoc.getElementsByTagName("Description")[0].innerHTML;

        // display an error message and cancel the submmiting 

        showError(message); 
        return;
    }

    const res = {
        address : xmlDoc.getElementsByTagName("Address1")[0].innerHTML,
        address2 : xmlDoc.getElementsByTagName("Address2")[0].innerHTML,
        state : xmlDoc.getElementsByTagName("State")[0].innerHTML,
        city : xmlDoc.getElementsByTagName("City")[0].innerHTML,
        zip : xmlDoc.getElementsByTagName("Zip5")[0].innerHTML,
    }


    // ask the user if he wants  to keep the adress he entred or the normalized one

    showModal(input, res); 
}