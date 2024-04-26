const verirficacaoEl = document.querySelector(".verificacao-container")
const btnAceitar = document.querySelector("#btnAceitar")
const btnRecusar = document.querySelector("#btnRecusar")

btnAceitar.addEventListener("click",()=>{
    verirficacaoEl.remove()
})

btnRecusar.addEventListener("click",()=>{
    window.location.href = "https://www.google.com"
})

