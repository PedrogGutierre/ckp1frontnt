let params = new URLSearchParams(window.location.search);
let id = params.get('id');
let produtoAtual;
const productContainer = document.querySelector(".product-details");

const createElement = async () => {
    try {
        const response = await fetch('../produtos.json');
        const data = await response.json();
        
        data.forEach((produto) => {
            if (produto.id == id) {
                produtoAtual = produto;
            }
        });

        productContainer.innerHTML = `
            <div class="product-card product-details">
                <div class="product-image">
                    <img src="../imgs/${produtoAtual.img}" alt="${produtoAtual.nome}">
                </div>
                <div class="product-details">
                    <h3 class="product-title">${produtoAtual.nome}</h3>
                    <p class="product-description">${produtoAtual.desc}</p>
                    <p class="product-price">R$ ${produtoAtual.preco}</p>
                    <button class="" onclick="addCarrinho()">Adicionar ao carrinho</button>
                </div>
            </div> 
        `;
    } catch (error) {
        console.error('Erro ao carregar o JSON:', error);
    }
};

createElement();

const addCarrinho = () => {

    let carrinhoAtual = localStorage.getItem("carrinho");

    carrinhoAtual = carrinhoAtual ? JSON.parse(carrinhoAtual) : [];

    carrinhoAtual.push(produtoAtual);

    localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

    alert(`${produtoAtual.nome} adicionado ao carrinho`)
};

