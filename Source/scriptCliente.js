//const { default: swal } = require("sweetalert")

window.onload = function(){
    let botao = document.getElementById("buttonEnviar")
    botao.addEventListener("click", funcoes)
}

function funcoes() {
    gravar()
    mostrar()
    limpar()   
}

function gravar() {
    let nome = document.getElementById("first_name").value
    if (nome == "") {
        swal("O campo nome está vazio", "Por favor digite novamente", "error")
        return 0
        
    }
    localStorage.setItem("Nome", nome)

     let sobrenome = document.getElementById("last_name").value
    localStorage.setItem("Sobrenome", sobrenome)
    if (sobrenome == "") {
    swal("O campo sobrenome está vazio", "Por favor digite novamente", "error")
    return 0
}
    
     let cpf = document.getElementById("cpf").value
    localStorage.setItem("CPF", cpf)
    if (cpf == "") {
    swal("O campo CPF está vazio", "Por favor digite novamente", "error")
    return 0
}

     let telefone = document.getElementById("phone").value
    localStorage.setItem("Phone", telefone)
    if (telefone == "") {
    swal("O campo telefone está vazio", "Por favor digite novamente", "error")
    return 0
}
    
     let dataNasc = document.getElementById("nascimento").value
    localStorage.setItem("Nasc", dataNasc)
    if (dataNasc == "") {
    swal("O campo de nascimento está vazio", "Por favor digite novamente", "error")
    return 0
}
    
     let email = document.getElementById("email").value
    localStorage.setItem("Email", email)
    if (email == "") {
    swal("O campos email está vazio", "Por favor digite novamente", "error")
    return 0
}
    
     let senha = document.getElementById("password").value
    localStorage.setItem("Senha", senha)

     let confSenha = document.getElementById("passwordConf").value
    localStorage.setItem("Conf", confSenha)

     if (senha != confSenha) {
        swal("Senhas não conferem","Por favor digite novamente", "error")
        let remove = localStorage.removeItem("Senha")
        let removeconf = localStorage.removeItem("Conf")
    }

    else if (senha.length < 8) {
        swal("No mínimo 8 caractéres", "Por favor digite novamente", "error")
        let remove = localStorage.removeItem("Senha")
        let removeconf = localStorage.removeItem("Conf")
        
    } else {
         swal("Parabéns", "Gravado com sucesso", "success")
             .then(() => {
             window.location.href = "/Pages/infoCadastro.html"
         })
         
    }
   

}

function mostrar() {
    let recNome = localStorage.getItem("Nome")

    let recSobrenome = localStorage.getItem("Sobrenome")

    let recCpf = localStorage.getItem('CPF')

    let recTelefone = localStorage.getItem("Phone")

    let recNasc = localStorage.getItem("Nasc")

    let recEmail = localStorage.getItem("Email")

    let recSenha = localStorage.getItem("Senha")

    let recConf = localStorage.getItem("Conf")
}

function limpar() {
    let nome = document.getElementById("first_name").value = ""

 let sobrenome = document.getElementById("last_name").value = ""
  
 let cpf = document.getElementById("cpf").value = ""

 let telefone = document.getElementById("phone").value = ""

 let dataNasc = document.getElementById("nascimento").value = ""

 let email = document.getElementById("email").value = ""

 let senha = document.getElementById("password").value = ""

    let confSenha = document.getElementById("passwordConf").value = ""
    

}