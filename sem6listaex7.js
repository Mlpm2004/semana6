    const arrayop=("+","-","x","/")
    import {somar,dividir, multiplicar,subtrair}  from "./sem6listaex7_lib.js"
    import {btsoma,btsubtrai,btmultiplica,btdivide,btigual,input,resultado}  from "./selectorex7.js"
    let arraycalculo=[]
    let ind=0
    btsoma.addEventListener("click",        ()=>calcula("+"))
    btsubtrai.addEventListener("click",     ()=>calcula("-"))
    btmultiplica.addEventListener("click",  ()=>calcula("x"))
    btdivide.addEventListener("click",      ()=>calcula("/"))
    btigual.addEventListener("click",       ()=>calcula("="))
    function calcula(op){
        let erro=0
        let teste=""
        if (op=="="){
            arraycalculo.push(input.value);
            input.value=""
             while (arraycalculo.length!=1) {
                erro++
                if (erro>=20){
                    alert("erro inesperado")
                    break
                }
                for (let id=0;id<=arraycalculo.length-1;id++) id==0? teste= arraycalculo[id]: teste+= arraycalculo[id]
                let flag=true
                for (let i=1;i<=arraycalculo.length-1;i+=2){
                    if (arraycalculo[i]=="x" ){
                        arraycalculo[i-1]=multiplicar(parseInt(arraycalculo[i-1],10),parseInt(arraycalculo[i+1],10))
                        arraycalculo.splice(i, 2);
                        flag=false
                        break
                    }
                    if (arraycalculo[i]=="/" ){
                        arraycalculo[i-1]=dividir(parseInt(arraycalculo[i-1],10),parseInt(arraycalculo[i+1],10))
                        arraycalculo.splice(i, 2);
                        flag=false
                        break
                    }
                }
                if (flag){
                    for (let i=1;i<=arraycalculo.length-1;i+=2){
                        if (arraycalculo[i]=="+" ){
                            arraycalculo[i-1]=somar(parseInt(arraycalculo[i-1],10),parseInt(arraycalculo[i+1],10))
                            arraycalculo.splice(i, 2);
                            break
                        }
                        if (arraycalculo[i]=="-" ){
                            arraycalculo[i-1]=subtrair(parseInt(arraycalculo[i-1],10),parseInt(arraycalculo[i+1],10))
                            arraycalculo.splice(i, 2);
                            break
                        }
                    }
                }
            }
            resultado.innerHTML="O Resultado é : "+arraycalculo[0]
            arraycalculo=[]
        }else{
            arraycalculo.push(input.value);
            arraycalculo.push(op)
            let conta=""
            for (let i in arraycalculo) conta=conta+arraycalculo[i]
            resultado.innerHTML=conta
            input.value=""
        }
    }
