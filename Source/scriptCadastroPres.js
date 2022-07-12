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
    if (nome == "") {
        swal("O campo nome está vazio", "Por favor digite novamente", "error")
        return 0 
    }

    let sobrenome = document.getElementById("last_name").value
    localStorage.setItem("Sobrenome", sobrenome)
    if (sobrenome == "") {
        swal("O campo sobrenome está vazio", "Por favor digite novamente", "error")
        return 0
    }

    let CNPJ = document.getElementById("cnpj").value
    localStorage.setItem("cnpj", CNPJ)
    
    let telefone = document.getElementById("phone").value
    localStorage.setItem("Telefone", telefone)
    if (telefone == "") {
        swal("O campo telefone está vazio", "Por favor digite novamente", "error")
        return 0 
    }
    
    let DataNac = document.getElementById("nascimento").value
    localStorage.setItem("Nascimento", DataNac)
    if (DataNac == "") {
        swal("O campo Nascimento está vazio", "Por favor digite novamente", "error")
        return 0 
    }

    let email = document.getElementById("email").value
    localStorage.setItem("Email", email)
    if (email == "") {
        swal("O campo email está vazio", "Por favor digite novamente", "error")
        return 0 
    }

    let senha = document.getElementById("password").value
    localStorage.setItem("Senha", senha)

    let confSenha = document.getElementById("confpassword").value
    localStorage.setItem("Conf", confSenha)

    let inputs = [nome, sobrenome, CNPJ, telefone, email, senha, confSenha]

    if (inputs = [] ) {
        swal("Os campos estão vazios","Por favor digite novamente", "error")
    }

    if (senha != confSenha) {
        senha = localStorage.removeItem("Senha")
        confSenha = localStorage.removeItem("Conf")
        swal("Senhas não conferem","Por favor digite novamente", "error")
        
    }

    if (senha.length < 8) {
        senha = localStorage.removeItem("Senha")
        confSenha = localStorage.removeItem("Conf")
        swal("No mínimo 8 caractéres", "Por favor digite novamente", "error")
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

    let recCnpj = localStorage.getItem("cnpj")

    let recTel = localStorage.getItem("Telefone")

    let recData = localStorage.getItem("Nascimento")

    let recEmail = localStorage.getItem("Email")

    let recSenha = localStorage.getItem("Senha")

    let recConf = localStorage.getItem("Conf")


}


function especialidade(nomeID, spanID, nomeLocal) {
     let idCheck = document.getElementById(nomeID)
     if (idCheck.checked) {
     let idSpan = document.getElementById(spanID)
     idSpan = (idSpan.innerText.replace(/\\s/g, ''))
     localStorage.setItem(nomeLocal, idSpan)
         let recBar = localStorage.getItem(nomeLocal)
         let message = document.getElementById(nomeID).value
         message = swal(message + " escolhido",  "com sucesso", "success")
     
 } else {
      let remove = localStorage.removeItem(nomeLocal)
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