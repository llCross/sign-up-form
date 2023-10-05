const userPassword = document.getElementById('user_password');
const confirmPassword = document.getElementById('confirm_password')

function confirm() {
if (userPassword.value !== confirmPassword.value) {
    userPassword.setAttribute("id","error");
    confirmPassword.setAttribute("id","error");
}  else {
    userPassword.removeAttribute("id","error");
    confirmPassword.removeAttribute("id","error");
}
}