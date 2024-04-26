const contatoForm = document.getElementById("contatoForm");

contatoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const mensagem = document.getElementById("mensagem").value;


  alert("Mensagem enviada com sucesso!")

});

