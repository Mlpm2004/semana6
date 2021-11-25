import {somar,dividir} from "./Sem6Listaex5.js"
let soma=somar(parseInt(window.prompt("insira a nota 1"),10),0)
soma=somar(parseInt(window.prompt("insira a nota 2"),10),soma)
alert( "A Média é : "+dividir(somar(soma,parseInt(window.prompt("insira a nota 3"),10)),3))

    
