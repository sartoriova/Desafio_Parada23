let btn_obterValor = document.querySelector("button");

btn_obterValor.addEventListener("click", function () {
    const produtos = {
        "Air Fryer": 200,
        "Bolsa da Gucci": 6000,
        "Computador": 1200,
        "Escrivaninha": 190,
        "Frigobar": 750
    };

    let produto = document.querySelector("select").value;

    if (produto in produtos) {
        document.querySelector("h5").textContent = `O valor do(a) ${produto} é de R$${produtos[produto]},00`;
    } else {
        document.querySelector("h5").textContent = "Nenhum produto foi selecionado!"
    }
});