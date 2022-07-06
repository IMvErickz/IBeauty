window.onload = function () {
    let recNome = localStorage.getItem("Nome")
let recSobrenome = localStorage.getItem("Sobrenome")
let recCpf = localStorage.getItem('CPF')
let recTelefone = localStorage.getItem("Phone")
    let recNasc = localStorage.getItem("Nasc")
    let nasc = new Date(recNasc)
    let nascFomrt = nasc.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
let recEmail = localStorage.getItem("Email")
let recSenha = localStorage.getItem("Senha")
    let recConf = localStorage.getItem("Conf")
    
    let corpoTab = document.getElementById("corpoTabela")
let novaLinha = document.createElement("tr")

    let col1 = document.createElement("td")
    col1.innerHTML = recNome

    let col3 = document.createElement("td")
col3.innerHTML = recSobrenome

    let col2 = document.createElement("td")
    col2.innerHTML = recCpf

    let col4 = document.createElement("td")
    col4.innerHTML = recTelefone
    
    let col5 = document.createElement("td")
    col5.innerHTML = nascFomrt
    
    let col6 = document.createElement("td")
    col6.innerHTML = recEmail

    let col7 = document.createElement("td")
col7.innerHTML = recSenha
    
    
novaLinha.appendChild(col1)
novaLinha.appendChild(col2)
    novaLinha.appendChild(col3)
    novaLinha.appendChild(col4)
    novaLinha.appendChild(col5)
    novaLinha.appendChild(col6)
    novaLinha.appendChild(col7)

    
corpoTab.appendChild(novaLinha)
}