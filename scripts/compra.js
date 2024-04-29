

const produtosContainer = document.querySelector("#produtos");


const criarCardProduto = (produto) => {
  const card = `
  <div class="product-card">
    <div class="product-image">
      <img src="../imgs/${produto.img}" alt=${produto.nome}>
    </div>
    <div class="product-details">
      <h3 class="product-title">${produto.nome}</h3>
      <p class="product-description">${produto.desc}</p>
      <p class="product-price">R$ ${produto.preco}</p>
      <a href="./pages/produto.html?id=${produto.id}">Ir para o produto</a>
    </div>
  </div> 
`;
  produtosContainer.innerHTML += card;
};


fetch('../produtos.json')
  .then(response => response.json())
  .then(data => {
    data.forEach((produto) => {
      criarCardProduto(produto);
    });
  })
  .catch(error => console.error('Erro ao carregar o JSON:', error));

