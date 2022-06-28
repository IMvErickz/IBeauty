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
        senha = localStorage.removeItem("Senha")
        confSenha = localStorage.removeItem("Conf")
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
    let escoBar = document.getElementById("barbeiro")
    if (escoBar.checked) {
        let span = document.getElementById("spanBar")
        span = (span.innerText.replace(/\s/g, ''))
        localStorage.setItem("bar", span)
        let recBar = localStorage.getItem("bar")
        
    } else {
        let remove = localStorage.removeItem("bar")
    }
}


function escolhaManicure() {
    let escoBar = document.getElementById("manicure")
    if (escoBar.checked) {
        let span = document.getElementById("spanMan")
        span = (span.innerText.replace(/\\s/g, ''))
        localStorage.setItem("man", span)
        let recBar = localStorage.getItem("man")
        
    } else {
        let remove = localStorage.removeItem("man")
    }
}

function escolhaEstetica() {
    let escoBar = document.getElementById("estetica")
    if (escoBar.checked) {
        let span = document.getElementById("spanEstet")
        span = (span.innerText.replace(/\\s/g, ''))
        localStorage.setItem("estetica", span)
        let recBar = localStorage.getItem("estetica")
        
    } else {
         let remove = localStorage.removeItem("estetica")
    }

}

function limpar() {
    let nome = document.getElementById("first_name").value = ""

    let sobrenome = document.getElementById("last_name").value = ""

    let CNPJ = document.getElementById("cnpj").value = ""

    let telefone = document.getElementById("phone").value = ""

    let DataNac = document.getElementById("nascimento").value = ""

    let email = document.getElementById("email").value = ""

    let senha = document.getElementById("password").value = ""

    let confSenha = document.getElementById("confpassword").value = ""
    
    let escoBar = document.getElementById("barbeiro")
    let escoMan = document.getElementById("manicure")
    let escoEst = document.getElementById("estetica")
    if ((escoBar.checked = true) && (escoMan.checked = true) && (escoEst.checked = true) ) {
        escoBar.checked = false
        escoMan.checked = false
        escoEst.checked = false
    }


}