//usado trator de evento addEventListener
//querySelector e querySelectorALL
document.addEventListener('DOMContentLoaded', function () {
    let stream = document.querySelector('.gallery__stream');
    let items = document.querySelectorAll('.gallery__item');
    let prev = document.querySelector('.gallery__prev');
    let next = document.querySelector('.gallery__next');
// stream.insertBefore, fará a transição de um após o outro.
// em u lenght(comprimento) de - 1
//funcao anonima
    prev.addEventListener('click', function () {
        stream.insertBefore(items[items.length - 1], items[0]);
        items = document.querySelectorAll('.gallery__item');
    });
//funcao anonima 
    next.addEventListener('click', function () {
        stream.appendChild(items[0]);
        items = document.querySelectorAll('.gallery__item');
    });
});
const linguagens = ['javascript', 'html', 'css'];
const total = linguagens.push('sql', 'phton');
console.log(linguagens); 
console.log(total);

