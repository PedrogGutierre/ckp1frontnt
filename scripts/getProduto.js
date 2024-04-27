let params = new URLSearchParams(window.location.search);
let id = params.get("id");
let produtoAtual;
const productContainer = document.querySelector(".product-details");
const commentBtn = document.querySelector("#comments-btn");
const commentInput = document.querySelector("#comments-input");
const commentContainer = document.querySelector(".comments-container");

const createElement = async () => {
  try {
    const response = await fetch("../produtos.json");
    const data = await response.json();

    data.forEach((produto) => {
      if (produto.id == id) {
        produtoAtual = produto;
      }
    });

    let productHTML = `
            <div class="product-card product-details">
                <div class="product-image">
                    <img src="../imgs/${produtoAtual.img}" alt="${produtoAtual.nome}">
                </div>
                <div class="product-details">
                    <h2 class="product-title">${produtoAtual.nome}</h2>
                    <p class="product-description">${produtoAtual.desc}</p>
                    <p class="product-price">R$ ${produtoAtual.preco}</p>
                    <button class="" onclick="addCarrinho()">Adicionar ao carrinho</button>
                </div>
            </div> 
        `;

    productHTML += '<ul class="recipes">';
    productHTML += "<h4>Receitas que combinam com este vinho:</h4>";
    produtoAtual.comidas.forEach((receita) => {
      productHTML += `<li>${receita}</li>`;
    });
    productHTML += "</ul>";

    productContainer.innerHTML = productHTML;
  } catch (error) {
    console.error("Erro ao carregar o JSON:", error);
  }
};

createElement();

commentBtn.addEventListener("click", () => {

    

  if (commentInput.value != "") {
    commentContainer.innerHTML += `<li>${commentInput.value}</li>`;
    commentInput.value = "";
  }
});

const addCarrinho = () => {
  let carrinhoAtual = localStorage.getItem("carrinho");

  carrinhoAtual = carrinhoAtual ? JSON.parse(carrinhoAtual) : [];

  carrinhoAtual.push(produtoAtual);

  localStorage.setItem("carrinho", JSON.stringify(carrinhoAtual));

  alert(`${produtoAtual.nome} adicionado ao carrinho`);
};
