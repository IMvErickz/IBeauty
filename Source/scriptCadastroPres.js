window.onload = function () {
    let botao = document.getElementById("buttonEnviar")
    botao.addEventListener("click", funcoes)
}

function funcoes() {
    gravar()
    mostrar()
}

function gravar() {
    let nome = document.getElementById("first_name").value
    localStorage.setItem("Nome", nome)

    let sobrenome = document.getElementById("last_name").value
    localStorage.setItem("Sobrenome", sobrenome)

    let CNPJ = document.getElementById("cnpj").value
    localStorage.setItem("Cnpj", CNPJ)
    
    let telefone = document.getElementById("phone").value
    localStorage.setItem("Telefone", telefone)
    
    let DataNac = document.getElementById("nascimento").value
    localStorage.setItem("Nascimento", DataNac)

    let email = document.getElementById("email").value
    localStorage.setItem("Email", email)

    let senha = document.getElementById("password").value
    localStorage.setItem("Senha", senha)

    let confSenha = document.getElementById("confpassword").value
    localStorage.setItem("Conf", confSenha)

    if (senha != confSenha) {
        alert("Senhas não conferem")
    }


}

function mostrar() {
    let recNome = localStorage.getItem("Nome")
    console.log(recNome)

    let recSobrenome = localStorage.getItem("Sobrenome")
    console.log(recSobrenome)

    let recCnpj = localStorage.getItem("Cnpj")
    console.log(recCnpj)

    let recTel = localStorage.getItem("Telefone")
    console.log(recTel)

    let recData = localStorage.getItem("Nascimento")
    console.log(recData)

    let recEmail = localStorage.getItem("Email")
    console.log(recEmail)

    let recSenha = localStorage.getItem("Senha")

    let recConf = localStorage.getItem("Conf")


}

function escolhaBarbeiro() {
 alert("Barbeiro escolhido")
}


function escolhaManicure() {
 alert("Manicure e pedicure escolhido")
}

function escolhaEstetica() {
    alert("Estética corporal esc")
}