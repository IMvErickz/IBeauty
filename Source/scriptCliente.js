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

//Teste de objeto
function gravar() {
    const cliente = {
        Nome: document.getElementById("first_name").value,
        Sobrenome: document.getElementById("last_name").value,
        Cpf: document.getElementById("cpf").value.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4"),
        Telefone: document.getElementById("phone").value.replace(/^(\d{2})(\d{5})(\d{4})/, "$1 $2-$3"),
        Nascimento: document.getElementById("nascimento").value,
        Email: document.getElementById("email").value,
        Senha: document.getElementById("password").value,
        ConfSenha: document.getElementById("passwordConf").value
    }

    localStorage.setItem("Cliente", JSON.stringify(cliente))
    let rec = JSON.parse(localStorage.getItem("Cliente"))
    console.log(rec)
    
    function isEmpty(obj) {
        return Object.keys(obj).length === 0;
    }
    console.log(isEmpty({ cliente }))

    function ObjCompare(obj1, obj2){
    if (obj1 === obj2){
        return true;
    };
    return false;
}
    //console.log(ObjCompare(cliente, []))
    let remove = localStorage.removeItem("Cliente")
  
    if (cliente.Email == "" || cliente.Cpf == "" || cliente.Senha == "") {
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
    } else {
        swal("Parabéns", "Gravado com sucesso", "success")
            .then(() => {
            window.location.href = "/Pages/infoCadastro.html"
        })
        
    }
}