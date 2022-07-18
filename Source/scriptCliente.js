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
function gravaar() {
    const cliente = [{
        Nome: document.getElementById("first_name").value,
        Sobrenome: document.getElementById("last_name").value,
        Cpf: document.getElementById("cpf").value,
        Telefone: document.getElementById("phone").value,
        Nascimento: document.getElementById("nascimento").value,
        Email: document.getElementById("email").value,
        Senha: document.getElementById("password").value,
        ConfSenha: document.getElementById("passwordConf").value
    }]

    localStorage.setItem("Cliente", JSON.stringify(cliente))
    let rec = JSON.parse(localStorage.getItem("Cliente"))

    console.log(rec)

    //let keep 

    //keep.push(cliente)
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
  
    if (isEmpty(cliente)) {
        swal("Os campos estão vazios", "Por favor digite novamente", "error")
        .then(() => {
                let remove = localStorage.removeItem("Cliente")
            
        })
    } 
      
    

    else if(cliente.Senha != cliente.ConfSenha){
        swal("As senhas não conferem", "Por favor digite novamente", "error")
            .then(() => {
            let remove = localStorage.removeItem("Cliente")
        })
    } else {
        swal("Parabéns", "Gravado com sucesso", "success")
        
    }
}
function gravar() {
    let nome = document.getElementById("first_name").value
    localStorage.setItem("Nome", nome)
    if (nome == "") {
        swal("O campo nome está vazio", "Por favor digite novamente", "error")
        let remove = localStorage.removeItem("Nome")
        return 0
        
    }
    

     let sobrenome = document.getElementById("last_name").value
    localStorage.setItem("Sobrenome", sobrenome)
    if (sobrenome == "") {
        swal("O campo sobrenome está vazio", "Por favor digite novamente", "error")
        let remove = localStorage.removeItem("Sobrenome")
    return 0
}
    
     let cpf = document.getElementById("cpf").value
    localStorage.setItem("CPF", cpf)
    if (cpf == "") {
        swal("O campo CPF está vazio", "Por favor digite novamente", "error")
        let remove = localStorage.removeItem("CPF")
    return 0
}

     let telefone = document.getElementById("phone").value
    localStorage.setItem("Phone", telefone)
    if (telefone == "") {
        swal("O campo telefone está vazio", "Por favor digite novamente", "error")
        let remove = localStorage.removeItem("Phone")
    return 0
}
    
     let dataNasc = document.getElementById("nascimento").value
    localStorage.setItem("Nascimento", dataNasc)
    if (dataNasc == "") {
        swal("O campo de nascimento está vazio", "Por favor digite novamente", "error")
        let remove = localStorage.removeItem("Nascimento")
    return 0
}
    
     let email = document.getElementById("email").value
    localStorage.setItem("Email", email)
    if (email == "") {
        swal("O campo email está vazio", "Por favor digite novamente", "error")
        let remove = localStorage.removeItem("Email")
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
  
 let cpf = document.getElementById("CPF").value = ""

 let telefone = document.getElementById("phone").value = ""

 let dataNasc = document.getElementById("nascimento").value = ""

 let email = document.getElementById("email").value = ""

 let senha = document.getElementById("password").value = ""

    let confSenha = document.getElementById("passwordConf").value = ""
    

}