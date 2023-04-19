class BotaoAncora extends HTMLElement { //nosso componente terá as propriedades de um componente HTML
    constructor(){ //construtor da nossa própria classe (componente)
        super(); //chama o construtor do HTMLElement, ou seja, o nosso componente também pode ter atributos de um componente HTML
    
        const shadow = this.attachShadow({mode: "open"}); //cria a shadow, acopla ela ao nosso componente e indica com o "open" que ela poderá ser modificada pelo "mundo exterior" ou outros js. 
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    
    //construção de tudo o que será utilizado no componente 
    build(){
        //Componente total
        const componentRoot = document.createElement("a"); //cria o elemento
        componentRoot.setAttribute("class", "botaoAncora"); //dá uma classe ao elemento
        componentRoot.textContent = this.getAttribute("texto-botao");
        componentRoot.href = this.getAttribute("url-botao");
        componentRoot.target = this.getAttribute("target");

        return componentRoot; //o componente principal deve sempre ser retornado para que o componente retorne todo o conteúdo que foi feito na build
    }

    //estilização do componente
    styles(){
        const style = document.createElement("style"); //cria o elemento de estilização
        style.textContent = `.botaoAncora{
            padding: 0.8em;
            background-color: var(--vermelho);
            color: var(--bege-claro);
            border-radius: 5px;
            font-family: 'Quicksand', sans-serif;
            font-weight: 600;
            text-decoration: none;
            font-size: 0.7rem;
            margin-rigth: 0.5rem; 
        }

        .botaoAncora:hover{
            background-color: var(--rosa);
            color: var(--grafite);
        }

        ` //inclui no conteúdo do elemento de estilização. a escrita é tal qual como se estivesse escrevendo em um arquivo .css.

        return style; //retorna o elemento principal para ser acoplado à shadow.
    }
}

customElements.define("botao-ancora", BotaoAncora);