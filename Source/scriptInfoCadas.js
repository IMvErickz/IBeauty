window.onload = function () {
    let recCliente = JSON.parse(localStorage.getItem("Cliente"))
    console.log(recCliente)
    
    let corpoTab = document.getElementById("corpoTabela")
let novaLinha = document.createElement("tr")

    let col1 = document.createElement("td")
    col1.innerHTML = recCliente.Nome

    let col2 = document.createElement("td")
col2.innerHTML = recCliente.Sobrenome

    let col3 = document.createElement("td")
    col3.innerHTML = recCliente.Cpf

    let col4 = document.createElement("td")
    col4.innerHTML = recCliente.Telefone
    
    let col5 = document.createElement("td")
    col5.innerHTML = recCliente.Nascimento
    
    let col6 = document.createElement("td")
    col6.innerHTML = recCliente.Email

    let col7 = document.createElement("td")
col7.innerHTML = recCliente.Senha
    
    
novaLinha.appendChild(col1)
novaLinha.appendChild(col2)
    novaLinha.appendChild(col3)
    novaLinha.appendChild(col4)
    novaLinha.appendChild(col5)
    novaLinha.appendChild(col6)
    novaLinha.appendChild(col7)

    
corpoTab.appendChild(novaLinha)
}