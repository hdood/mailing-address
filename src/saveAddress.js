import { showError } from './Error.js';

export default function saveAddress(address){
    const data = new FormData(); 
    const xhr = new XMLHttpRequest(); 

    data.append("address", address.address); 
    data.append("address2", address.address2); 
    data.append("state", address.state); 
    data.append("city", address.city); 
    data.append("zip", address.zip);

    xhr.open("post", "http://localhost/usps/api/")

    xhr.send(data); 


    xhr.onreadystatechange = () => {

        if( xhr.status == 200 && xhr.readyState == 4){


            if(xhr.response == "exists"){
                document.getElementById("modal-error").classList.remove("d-none")
                return
            }
            document.getElementById("modal-success").classList.remove("d-none")
        }
    }
    
    
}