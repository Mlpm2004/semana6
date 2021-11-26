import { botao,btinicio,btpara,relogio } from "./Sem6aula4_selector";
let tempo=0
let temporizador=0
for (let i=0; i<botao.length;i++) botao[i].addEventListener('click',()=>setValor(botao[i].name))
btinicio.addEventListener('click',()=>startTemp())
btpara.addEventListener('click',()=>stopTemp("1")) 
function setValor(tmp){
    tempo=tmp
    let minuto=tempo/60
    relogio.innerHTML=formataNumero(minuto)+":00"
}
function startTemp(){
    if (tempo==0){
        alert("Selecione um dos valores de tempo")
    }else{
        let minuto=tempo/60-1
        let segundo=60
        temporizador = setInterval(() => {
            segundo--
            (minuto==0 && segundo==0)?stopTemp("0"):{}
        
            if (segundo==0 && minuto!=0){
                minuto--
                segundo=59
            }
            relogio.innerHTML=formataNumero(minuto)+":"+formataNumero(segundo)
        }, 1000);
    }
}
function stopTemp(tipo){
    clearInterval(temporizador)
    if (tipo==0){
        let audio = new Audio("./audio_hero_s-horse-whinny.mp3");
        audio.play();
    }
    
}
function formataNumero(numero){
    numero<=9?numero="0"+numero.toString():numero.toString()
    return numero
}

