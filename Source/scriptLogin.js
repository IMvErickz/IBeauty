window.onload = function () {
    let botao = document.getElementById("buttonEnviar")
    botao.addEventListener("click", funcoes)
}

function funcoes() {
    gravar()
    mostrar()
    limpar()
}

function gravar() {
    let email = document.getElementById("email").value
    localStorage.setItem("Email", email)

    let senha = document.getElementById("password").value
    localStorage.setItem("Senha", senha)
}

function mostrar() {
    let recEmail = localStorage.getItem("Email")
    console.log(recEmail)

    let recSenha = localStorage.getItem("Senha")
    console.log(recSenha)
}

function limpar() {
    let email = document.getElementById("email").value = ""

let senha = document.getElementById("password").value = ""

}

function onSignIn(googleUser) {
  var profile = googleUser.getBasicProfile();
  console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
  console.log('Name: ' + profile.getName());
  console.log('Image URL: ' + profile.getImageUrl());
  console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

 function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
      console.log('User signed out.');
    });
  }
