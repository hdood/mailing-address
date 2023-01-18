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
    let res = {}; 

    if(xmlDoc.getElementsByTagName("Address1")[0]){
        res.Address_Line_1 = xmlDoc.getElementsByTagName("Address1")[0].innerHTML; 
    }
    if(xmlDoc.getElementsByTagName("Address2")[0]){
        res.Address_Line_2 = xmlDoc.getElementsByTagName("Address2")[0].innerHTML; 
    }
    res.State = xmlDoc.getElementsByTagName("State")[0].innerHTML;
    res.City = xmlDoc.getElementsByTagName("City")[0].innerHTML;
    res.Zip = xmlDoc.getElementsByTagName("Zip5")[0].innerHTML; 

    // ask the user if he wants  to keep the adress he entred or the normalized one

    showModal(input, res); 
}
