import { bt5m,bt10m,bt15m,btinicio,btpara,relogio } from "./Sem6aula4._selector";
let tempo=0
let temporizador=0
bt5m.addEventListener('click',()=>setValor('300'))
bt10m.addEventListener('click',()=>setValor('600'))
bt15m.addEventListener('click',()=>setValor('900'))
btinicio.addEventListener('click',()=>startTemp())
btpara.addEventListener('click',()=>stopTemp())
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
            (minuto==0 && segundo==0)?stopTemp():{}
            segundo--
            if (segundo==0){
                minuto--
                segundo=59
            }
            relogio.innerHTML=formataNumero(minuto)+":"+formataNumero(segundo)
        }, 1000);
    }
}
function stopTemp(){
    clearInterval(temporizador)
}
function formataNumero(numero){
    numero<=9?numero="0"+numero.toString():numero.toString()
    return numero
}

