//const { default: swal } = require("sweetalert")

window.onload = function(){
    let botao = document.getElementById("buttonEnviar")
    botao.addEventListener("click", funcoes)
}

function funcoes() {
    gravar()
}

//Teste de objeto
function gravar() {
    const cliente = {
        Nome: document.getElementById("first_name").value,
        Sobrenome: document.getElementById("last_name").value,
        Cpf: document.getElementById("cpf").value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
        Telefone: document.getElementById("phone").value.replace(/^(\d{2})(\d{5})(\d{4})/, "$1 $2-$3"),
        Nascimento: document.getElementById("nascimento").value.split('-').reverse().join('/'),
        Email: document.getElementById("email").value,
        Senha: document.getElementById("password").value,
        ConfSenha: document.getElementById("passwordConf").value
    }

    let rec = JSON.parse(localStorage.getItem("Cliente"))
    console.log(rec)
    console.log(cliente.Senha)
    
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    console.log(isEmpty({ cliente }))

    //console.log(ObjCompare(cliente, []))
    let remove = localStorage.removeItem("Cliente")
  
    if (cliente.Email == "" || cliente.Cpf == "" || cliente.Senha == "" || cliente.Nome == "" ||
        cliente.Telefone == "" || cliente.Nascimento == "") {
        swal("Os campos estão vazios", "Por favor digite novamente", "error")
        .then(() => {
            remove
            
        })
    } else if(cliente.Senha != cliente.ConfSenha){
        swal("As senhas não conferem", "Por favor digite novamente", "error")
            .then(() => {
            remove
        })
    } else if (cliente.Senha.length < 8) {
        swal("Senha de no mínimo 8 caractéres", "Por favor digite novamente", "error")
            .then(() => {
           remove
            
        })
    } else if (cliente.Cpf.length < 11) {
        swal("CPF com no mínimo 11 dígitos", "Por favor digite novamente", "error")
            .then(() => {
            remove
        })
    }else {
        swal("Parabéns", "Gravado com sucesso", "success")
            .then(() => {
            window.location.href = "/Pages/infoCadastro.html"
                localStorage.setItem("Cliente", JSON.stringify(cliente))
        })
        
    }
}