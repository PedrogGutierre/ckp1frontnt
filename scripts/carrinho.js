let carrinhoAtual = JSON.parse(localStorage.getItem("carrinho"))
const carrinhoContainer = document.querySelector("#carrinho")
const totalContainer = document.querySelector("#total")
let total = 0




const removerDoCarrinho = (index) => {



    let carrinhoAtual = localStorage.getItem("carrinho");

    carrinhoAtual = carrinhoAtual ? JSON.parse(carrinhoAtual) : [];

    if (index >= 0 && index < carrinhoAtual.length) {
        carrinhoAtual.splice(index, 1);

        localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

        console.log("Produto removido do carrinho:", carrinhoAtual);
    } else {
        console.error("Índice fornecido está fora dos limites do carrinho.");
    }

    alert("Removido do carrinho")

    location.reload();


};



carrinhoAtual.forEach((item, i) => {
    if (item) {
        total += item.preco;
        carrinhoContainer.innerHTML += `  
            <div class="product-card">
                <div class="product-image">
                    <img src="../imgs/${item.img}" alt="${item.nome}">
                </div>
                <div class="product-details">
                    <a href="/pages/produto.html?id=${item.id}">${item.nome}</a>
                    <p class="product-price">R$ ${item.preco}</p>
                    <button onclick="removerDoCarrinho(${i})">Remover do carrinho</button>
                </div>
            </div>`;
    }
});


totalContainer.innerHTML = `Total da compra: R$${total.toFixed(2)}`


// - Opção de cupom de desconto. Ao digitar no campo de desconto e clicar em Aplicar:
//     - Se o cupom for FIAP2024 o preço terá 10% de desconto