//Colocando um escutador para saber quando houve o click no botão
document.getElementById('emailforms').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();

    var email = document.getElementById('useremail').value;

    console.log(email)
}