
function abrirModal() {
    document.getElementById('fundo').style.display = 'flex';
    document.getElementById('modal').style.display = 'block';
}
function fecharModal() { //Função com nome
    document.getElementById('fundo').style.display = 'none';
    document.getElementById('modal').style.display = 'none';
}

(function () {//Função auto-executável
    if (navigator.cookieEnabled === true) {
        let nome = prompt("Digite seu nome:");
        alert(`Olá ${nome}, os cookies são permitidos nesse site`)//String Template
    } else {
        alert(`Olá ${nome}, os cookies não são permitidos nesse site`)
    }
})()
//Usado evento de movimento do mouse, por meio do tratamento tradicional e usado a TagName funcao aninhada
window.onload = function () {
    let imagem = document.getElementsByTagName("img");
    imagem[0].onmouseover = function () {
        let widthOver = this.style.width = 60 + "px";
    };
    imagem[0].onmouseout = function () {
        let out = this.style.width = 50 + "px";
    }
};
//usado laco for in e metodo concat
const paginas = ['Index','Relatorios', 'Cadastre-se', '5s', 'Login']
const data = ['16','17','18','19','20','21']
for (const index in paginas) {
    console.log(index, paginas[index])
    const list = paginas.concat(data);
    console.log(list)
}
