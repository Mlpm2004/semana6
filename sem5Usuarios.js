class Usuario {
    #nome
    #email
    #senha
    #admin
    constructor(nome,email,senha){
        this.#nome=nome
        this.#email=email
        this.#senha=senha
        this.#admin=false
    }
    get nome(){
        return this.#nome
    }
    get email(){
        return this.#email
    }
     get senha(){
        return this.#senha
    }
     get admin(){
        return this.#admin
    } 
    vetor(){
        return {
                nome: this.nome,
                email: this.email,
                senha:this.senha,
                admin:this.#admin
                }
        }
    isAdmin(){
        return this instanceof Admin?"Usuario "+this.nome+" é Admin": "Usuário "+this.nome+" não é Admin"
    }
}
class Admin extends Usuario{
    constructor(nome,email,senha){
        super (nome,email,senha)
    }
    vetor(){
        return {
                nome: this.nome,
                email: this.email,
                senha:this.senha,
                admin:this.admin
                }
    }
    isAdmin(){
        return this instanceof Admin?"Usuario "+this.nome+" é Admin": "Usuário "+this.nome+" não é Admin"
    }
}
const colaborador= new Usuario("EU","qqqqqqq","çsajkfhashfa")
const administrador=new Admin("TU","qwwwwwwwww","çsajkfhashfa")
colaborador.admin=true
console.log(colaborador.vetor())
console.log(colaborador.isAdmin())
console.log(administrador.vetor())
console.log(administrador.isAdmin())
