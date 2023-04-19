//Menu dropdown
const menuFechado = document.querySelector("#icone-menu-fechado");
const menuAberto = document.querySelector("#icone-menu-aberto");

menuFechado.addEventListener("click", () => {  
    mostrar("menu-dropdown");
    mostrar("icone-menu-aberto");
    esconder("icone-menu-fechado");
});

menuAberto.addEventListener("click", () => {
    esconder("menu-dropdown");
    esconder("icone-menu-aberto");
    mostrar("icone-menu-fechado");
})

//Funções - Menu dropdown
function mostrar(id){
    document.getElementById(id).style.display = "flex";
}

function esconder(id){
    document.getElementById(id).style.display = "none";
}

//Seção inicial
function escritaPausada(texto){
    const textoPausado = texto.innerHTML.split('');
    texto.innerHTML = '';

    textoPausado.forEach(function(letter, i) {
        
        setTimeout(function(){ 
        texto.innerHTML += letter;
       },60*i);

    });
} 

const apresentacao = document.querySelector(".container__texto__apresentacao");

escritaPausada(apresentacao);