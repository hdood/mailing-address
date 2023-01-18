export function showError(message){
    error.innerHTML = message; 
    error.classList.remove("d-none")
}
export function hideError(){
    error.classList.add("d-none")
}