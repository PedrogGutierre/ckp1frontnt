const verirficacaoEl = document.querySelector(".verificacao-container")
const btnAceitar = document.querySelector("#btnAceitar")
const btnRecusar = document.querySelector("#btnRecusar")

let maiorIdade = localStorage.getItem("maiorIdade");


btnAceitar.addEventListener("click",()=>{
    localStorage.setItem("maiorIdade", true);
    verirficacaoEl.remove()
})

if(maiorIdade){
    verirficacaoEl.remove()
}

btnRecusar.addEventListener("click",()=>{
    window.location.href = "https://www.google.com"
})

