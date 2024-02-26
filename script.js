function signup() {
    var newUsername = document.getElementById("newUsername").value;
    var email = document.getElementById("email").value;
    var newPassword = document.getElementById("newPassword").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    
    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    
    console.log("Signup attempt with username: " + newUsername + ", email: " + email + " and password: " + newPassword);
}
