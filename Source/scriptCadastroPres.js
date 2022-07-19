//const { default: swal } = require("sweetalert")

window.onload = function () {
    let botao = document.getElementById("buttonEnviar")
    botao.addEventListener("click", funcoes)
}
//console.log("37356542000101".replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"))
function funcoes() {
    gravar()
    mostrar()
    limpar()
}

function gravar() {

    let prestador = {
        Nome: document.getElementById("first_name").value,
        Sobrenome: document.getElementById("last_name").value,
        CNPJ: document.getElementById("cnpj").value.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"),
        Telefone: document.getElementById("phone").value.replace(/^(\d{2})(\d{5})(\d{4})/, "$1 $2-$3"),
        Nascimento: document.getElementById("nascimento").value,
        Email: document.getElementById("email").value,
        Senha: document.getElementById("password").value,
        ConfSenha: document.getElementById("confpassword").value
    }

    localStorage.setItem("Prestador", JSON.stringify(prestador))
    let rec = JSON.parse(localStorage.getItem("Prestador"))

    if (prestador.Nome == "" || prestador.Email == "" || prestador.Senha == "") {
        swal("Os campos estão vazios", "Por favor digite novamente", "error")
            .then(() => {
            let remove = localStorage.removeItem("Prestador")
        })
    } else if (prestador.Senha != prestador.ConfSenha) {
        swal("Senhas não conferem", "Por favor digite novamente", "error")
            .then(() => {
            let remove = localStorage.removeItem("Prestador")
        })
    } else if (prestador.Senha.length < 8) {
        swal("Senha de no mínimo 8 caractéres", "Por favor digite novamente", "error")
            .then(() => {
            let remove = localStorage.removeItem("Prestador")
        })
    } else {
        swal("Parabéns", "Gravado com sucesso", "success")
    }
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
         swal("Escolha uma especialidade", "Por favor clique novamente", "error")
             .then(() => {
                 let remove = localStorage.removeItem(nomeLocal)
             
         })
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