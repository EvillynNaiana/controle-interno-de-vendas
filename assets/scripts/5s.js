document.querySelector("main>img").onclick = function () {
    this.src = "/assets/img/ideia-acessa.jpg";
    setTimeout(() => document.querySelector("body>img").src = "/assets/img/ideia-apagada.jpg", 5000);//Função Flecha - Arrow Function
}//usado o setTimeout
//notacao literal 
    let programa = {
        nome: "5S",
        email: "talk@email.com",
        descricao: "“Você não pode impor a produtividade, você deve fornecer as ferramentas para permitir que as pessoas se transformem no seu melhor.”",
        fala: function () {
            alert(this.descricao + " Eu sou o " + this.nome + " entre em contato, irei te fornecer as ferramentas: " + this.email);
        }
    }
    programa.fala();


