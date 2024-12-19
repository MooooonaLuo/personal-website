function onSubmit() {
    if (document.getElementById('password').value == 'chegg530') {
        window.location.href = 'learning_progress0391.html'; 
       }else{ 
           document.getElementById("alert").innerHTML = "The password is incorrect. Please try again.";
       }
}



