//criado objeto funcionario
class Funcionario{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
}
let evillyn = new Funcionario('Evillyn','1');
console.log("O funcionario que desenvolveu essa tela foi:")
console.log(evillyn);
console.log("Funcionario: " + evillyn.name);