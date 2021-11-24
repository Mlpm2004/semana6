    const arrayop=("+","-","x","/")
    let arraycalculo=[]
    let ind=0
    import somar from "./sem6listaex7_lib.js"
/*     const multiplicar = (num1,num2) => num1*num2
    const dividir = (num1,num2) => num1/num2
    const subtrair = (num1,num2) => num1-num2 
    const somar = (num1,num2) => num1+num2
 */    function calcula(op){
        const input= document.querySelector("#numero");
        let erro=0
        if (op=="="){
            arraycalculo.push(input.value);
            input.value=""
             while (arraycalculo.length!=1) {
                erro++
                if (erro>=20){
                    alert("erro inesperado")
                    break
                }
                for (id=0;id<=arraycalculo.length-1;id++) id==0? teste= arraycalculo[id]: teste+= arraycalculo[id]
                let flag=true
                for (i=1;i<=arraycalculo.length-1;i+=2){
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
                    for (i=1;i<=arraycalculo.length-1;i+=2){
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
            document.getElementById('conta').innerHTML="O Resultado é : "+arraycalculo[0]
            arraycalculo=[]
        }else{
            arraycalculo.push(input.value);
            arraycalculo.push(op)
            let conta=""
            for (i in arraycalculo) conta=conta+arraycalculo[i]
            document.getElementById('conta').innerHTML=conta
            input.value="" 
        }
    }
