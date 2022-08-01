let button = document.getElementById("quit")
    .addEventListener("click", () => {
        swal("Deslogado", "saída com sucesso", "success")
            .then(() => {
            window.location.href = "/Pages/Login.html"
        })
    })





