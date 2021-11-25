import {nome,descricao,imagem,nomecard,desccard,botao,imgcard } from "./Sem6aula3_selector.js"
botao.addEventListener("click", () => mudaCard());
function mudaCard(){
    if (nome.value=="" || descricao.value=="" || imagem.value=="") {
      alert("Preencha todos os campos")
    }else{
      nomecard.innerText=nome.value
      desccard.innerText=descricao.value
      imgcard.src=imagem.value
    }
}
