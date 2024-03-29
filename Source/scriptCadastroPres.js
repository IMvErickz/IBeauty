//const { default: swal } = require("sweetalert")

window.onload = function () {
    let botao = document.getElementById("buttonEnviar")
    botao.addEventListener("click", funcoes)
}
//console.log("37356542000101".replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5"))
function funcoes() {
    gravar()
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

    
    let rec = JSON.parse(localStorage.getItem("Prestador"))

    let remove = localStorage.removeItem("Prestador")
    let cnpjSize = prestador.CNPJ.length

    if (prestador.Nome == "" || prestador.Email == "" || prestador.Senha == "") {
        swal("Os campos estão vazios", "Por favor digite novamente", "error")
            .then(() => {
            remove
        })
    } else if (prestador.Senha != prestador.ConfSenha) {
        swal("Senhas não conferem", "Por favor digite novamente", "error")
            .then(() => {
            remove
        })
    } else if (prestador.Senha.length < 8) {
        swal("Senha de no mínimo 8 caractéres", "Por favor digite novamente", "error")
            .then(() => {
            remove
        })
    } else if (cnpjSize < 18) {
        swal("CNPJ incorreto", "Por favor digite novamente", "error")
            .then(() => {
            remove 
        })
    }else {
        swal("Parabéns", "Gravado com sucesso", "success")
            .then(() => {
                localStorage.setItem("Prestador", JSON.stringify(prestador))
                location.reload()
        })
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
    let escoBar = document.getElementById("barbeiro")
    let escoMan = document.getElementById("manicure")
    let escoEst = document.getElementById("estetica")
    if ((escoBar.checked = true) && (escoMan.checked = true) && (escoEst.checked = true) ) {
        escoBar.checked = false
        escoMan.checked = false
        escoEst.checked = false
    }


}

document.getElementById('cnpj').addEventListener('input', function (e) {
     var x = e.target.value.replace(/\D/g, '').match(/(\d{0,2})(\d{0,3})(\d{0,3})(\d{0,4})(\d{0,2})/);
     e.target.value = x[1] + '.' + x[2] + '.' + x[3] + '/' + x[4] + '-' + x[5];
   });