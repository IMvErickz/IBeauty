let button = document.getElementById("quit")
    .addEventListener("click", () => {
        swal("Até mais", "saída com sucesso", "success")
            .then(() => {
            window.location.href = "/Pages/Login.html"
        })
    })





