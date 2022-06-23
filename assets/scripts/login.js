do {
    cnpj = parseFloat(prompt("Digite o CNPJ de sua empresa:"));
    if (isNaN(cnpj)) {
        alert("Você digitou um CNPJ inválido!");
    } else {
        let confirma = confirm("Você gostaria de realizar seu login?");
        if (!confirma) {
            alert("Você será redirecionado à página principal em 5s após dar 'ok'!")
            setInterval(() => location.href = '/index.html', 5000);
        } // funcao flecha // alert, confirm, prompt e setInterval
    }
} while (isNaN(cnpj));

//parte da implementacao do uso onfocus e onblur
// usado Id
function entrada() {
    document.getElementById("name").style.backgroundColor = "#13138152";
}

function saida() {
    document.getElementById("name").style.backgroundColor = "#6226c38c"
}