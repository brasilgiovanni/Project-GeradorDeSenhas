"use strict";
// importando os ids do arquivo html
let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#btn");

let tamanhoSenhaElement = document.querySelector("#tamanhoSenha");
let newPassword = document.querySelector("#newPassword");

let containerPassword = document.querySelector("#container-password");

// código de lógica
/*
// Adicione os intervalos de caracteres UTF-8 desejados
for (let i = 32; i <= 126; i++) {
    charset += String.fromCharCode(i);
}
*/

// Lógica para funcionar os botões do Menu
let charset = "";
// Função para definir o charset
function setCharset(charsetType) {
    // Remove a classe 'menu-button-active' de todos os botões do menu
    const menuButtons = document.querySelectorAll('.menu-button-active');
    menuButtons.forEach(button => {
        button.classList.remove('menu-button-active');
        button.classList.add('menu-button');
    });

    // Adiciona a classe 'menu-button-active' ao botão clicado
    const clickedButton = event.target;
    clickedButton.classList.add('menu-button-active');
    clickedButton.classList.remove('menu-button');

    // Determine o charset com base no charsetType
    if (charsetType === 'numbers') {
        charset = "0123456789";
    } else if (charsetType === 'numbersAndLetters') {
        charset = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    } else {
        charset = "!#$%&0123456789:;@ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    }
};

let novaSenha = "";

// mostrar o número indicando o tamanho de caracteres escolhido
tamanhoSenhaElement.innerHTML = sliderElement.value; // aqui ja vai mostrar de forma estática o valor inicial

// fazendo a dinâmica do valor que for selecionado no slider
slider.oninput = function() {
    tamanhoSenhaElement.innerHTML = this.value;
};

// funcao para gerar senha
function generatePassword() {
    let pass = "";

    for(let k=0, n = charset.length; k <sliderElement.value; k++) {
        pass += charset.charAt(Math.floor(Math.random() * n)); // o floor transforma em numero inteiro o random
    }; 

    containerPassword.classList.remove("hide"); // remove a classe "hide" para que o css nao reconheca e fique visivel
    newPassword.innerHTML = pass; // colocando na span do html
    novaSenha = pass; // salvando o código na varia novaSenha
};

// função para que o usuário possa copiar a senha gerada ao clicar em cima
// ...

// Adicione um ouvinte de evento de clique ao elemento containerPassword
containerPassword.addEventListener("click", copyPassword);

// função para copiar a senha
function copyPassword() {
    var copyText = document.getElementById("newPassword");
    var textArea = document.createElement("textarea");
    textArea.value = copyText.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand("copy");
    document.body.removeChild(textArea);
}








