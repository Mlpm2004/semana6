// Author: Eduardo
// 17/11/2021 Brasil
const Je = {
    get : function (seletor){
        const elemento = document.querySelector(seletor);
        if(elemento == null){
            throw new Error('O seletor "'+seletor+'" não foi encontrado')
        }
        return elemento
    },
    modificaCSS : function (seletor, ajudante){
        
        //------------Exemplo de uso do "modificaCSS()"
        // modificaCSS("footer", function(styleOfElement){
        //     styleOfElement.background = "cyan";
        //     styleOfElement.color = "black";
        // });

        //modificaCSS("footer", "background:black; color: white;");

        //modificaCSS("footer", {background: "cyan", color: "black"});


        const element = this.get(seletor);
    
        if(typeof ajudante == 'function'){
         
            ajudante(element.style);
    
        }else if(typeof ajudante == 'string'){
    
            element.style.cssText = ajudante;
    
        }else if(typeof ajudante == 'object'){
    
            for(let atributo in ajudante){
                element.style[atributo] = ajudante[atributo]
            }
    
        }else{
            throw new Error('O objeto "ajudante" não é de um tipo apropriado.')
        }
    },
    addClickAction: function (seletor, callback){
        const element = this.get(seletor);
        element.addEventListener("click", callback)
    } ,
    addGenericAction : function (seletor, event, callback){
        const element = this.get(seletor);
        element.addEventListener(event, callback)
    }
} 


