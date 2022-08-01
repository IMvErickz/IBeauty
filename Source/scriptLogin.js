//const { default: swal } = require("sweetalert")

window.onload = function () {
    let botao = document.getElementById("buttonEnviar")
    botao.addEventListener("click", funcoes)
}

function funcoes() {
    gravar()
    mostrar()
}

function gravar() {
  let inputEmail = document.getElementById("email").value
  let email = JSON.parse(localStorage.getItem("Cliente"))
  
  let inputPass = document.getElementById("password").value
  let password = JSON.parse(localStorage.getItem("Cliente"))

  if (email.Email == inputEmail && password.Senha == inputPass) {
    swal("Logado", "Dados corretos", "success")
  } else {
    swal("Dados incorretos", "Por favor tente novamente", "error")
      .then(() => {
      limpar()
    })
  }
    
  }

function limpar() {
    let email = document.getElementById("email").value = ""

let senha = document.getElementById("password").value = ""

}

//function onSignIn(googleUser) {
  //var profile = googleUser.getBasicProfile();
 // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
 // console.log('Name: ' + profile.getName());
 // console.log('Image URL: ' + profile.getImageUrl());
  //console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
//}

 //function signOut() {
   // var auth2 = gapi.auth2.getAuthInstance();
   // auth2.signOut().then(function () {
    //  console.log('User signed out.');
   // });
 // }
