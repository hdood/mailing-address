import saveAddress from "./saveAddress.js";

export default function showModal(input, response){

    console.log(response);



        const modalItem = document.getElementById('Modal');

        const standardizedAddress=
        `
        <div  id="standardizedIndormations"  class="p-1 d-none border font-monospace opacity-75 mb-4"> 
            Adress Line 1: ${response.address} <br>
            Adress Line 2: ${response.address2} <br>
            State: ${response.state} <br>
            City: ${response.city} <br>
            Zip Code: ${response.zip}
        </div>
        `
        const originalAddress=
        `
        <div id="originalInformations" class=" p-1 border font-monospace opacity-75 mb-4"> 
            Adress Line 1: ${input.address} <br>
            Adress Line 2: ${input.address2} <br>
            State: ${input.state} <br>
            City: ${input.city} <br>
            Zip Code: ${input.zip}
        </div>
        `
        const modalBody = 
        `<div class="modal-body">
            <div class="mb-2"> Which address format you want to save? </div> 
            <div class="mb-4 ">
                    <div class="btn-group" role="group">
                        <input  type="radio" class="btn-check" name="btnradio" id="btnradio1" checked>
                        <label class="btn btn-outline-primary" for="btnradio1">ORIGINAL</label>
                    
                        <input type="radio" class="btn-check" name="btnradio" id="btnradio2">
                        <label class="btn btn-outline-primary" for="btnradio2">STANDARDIZED (USPS)</label>        
                    </div>  
            </div>
            ${originalAddress}
            ${standardizedAddress}
            <div id="modal-success" class="alert d-none alert-success" role="alert">
                Address saved successfully!
            </div>
            <div id="modal-error" class="alert d-none alert-danger" role="alert">
                Address already exists
            </div>
        </div>
        `

    
        modalItem.innerHTML = '';

        
    
        modalItem.innerHTML = ` <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                        <div class="modal-title h5">Save Address</div>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        <hr>
                                        </div>
                                        ${modalBody}
                                        <div class="modal-footer">
                                        <button id="save"  type="button" id"keepNormlized" class="btn btn-primary save-btn">Save</button>
                                        </div>
                                    </div>
                                </div>
                              `;

                              
        // create the Modal

        new bootstrap.Modal(modalItem).show();
        
        // present the user choice to save the original address or the standardized one
        let saveOriginal = true;
        
        const saveBtn = document.getElementById("save");
        saveBtn.addEventListener("click", () => {


            if(saveOriginal){
                saveAddress(input)
                return; 
            }
            saveAddress(response)
        })

        // add an event  listener to display informations about the address that the user entred

        document.getElementById("btnradio1").addEventListener("click", () => {
            const original = document.getElementById("originalInformations")
            const standardized = document.getElementById("standardizedIndormations")

            original.classList.remove("d-none")
            standardized.classList.add("d-none")
            saveOriginal = true; 
        })

         // add an event  listener to display informations about the standardized address 

        document.getElementById("btnradio2").addEventListener("click", () => {
            const original = document.getElementById("originalInformations")
            const standardized = document.getElementById("standardizedIndormations")

            original.classList.add("d-none")
            standardized.classList.remove("d-none")
            saveOriginal = false; 
        })
}