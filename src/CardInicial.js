// <script src="CAMINHO DO JS DO COMPONENTE" defer></script> ->> linkar seu componente no head do index.html. o DEFER serve para que ele seja carregado somente após o browser ter parsed o documento, em que ele criará a árvore onde a nossa shadow irá ser acoplada

class CardInicial extends HTMLElement { //nosso componente terá as propriedades de um componente HTML
    constructor(){ //construtor da nossa própria classe (componente)
        super(); //chama o construtor do HTMLElement, ou seja, o nosso componente também pode ter atributos de um componente HTML
    
        const shadow = this.attachShadow({mode: "open"}); //cria a shadow, acopla ela ao nosso componente e indica com o "open" que ela poderá ser modificada pelo "mundo exterior" ou outros js. 
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    
    //construção de tudo o que será utilizado no componente 
    build(){
        //Componente total
        const componentRoot = document.createElement("div"); //cria o elemento
        componentRoot.setAttribute("class", "cardInicial"); //dá uma classe ao elemento
       
        //Topo do card - foto, nome, @ 
        const cardTop = document.createElement("div");
        cardTop.setAttribute("class", "cardInicial__top");
        
        const foto = document.createElement("img");
        foto.setAttribute("class", "cardInicial__top__foto");
        foto.src = "https://github.com/Camilabsm/meu-site/blob/master/img/fotor_2023-4-3_9_36_21.png";
        foto.alt = "Foto da Camila";

        const nome = document.createElement("p");
        nome.setAttribute("class", "cardInicial__top__nome");
        nome.textContent = "Camila Matias";

        const handle = document.createElement("span");
        handle.setAttribute("class", "cardInicial__top__handle");
        handle.textContent = "@camilabsm • 14 abr";

        cardTop.appendChild(foto);
        cardTop.appendChild(nome);
        cardTop.appendChild(handle);

        //Meio do card - Texto principal
        const cardMeio = document.createElement("p");
        cardMeio.setAttribute("class", "cardInicial__meio");
        cardMeio.innerText = this.getAttribute("texto-principal");

        //Parte de baixo do card
        const cardBaixo = document.createElement("div");
        cardBaixo.setAttribute("class", "cardInicial__baixo");
        
        const likeCheio = document.createElement("img");
        likeCheio.setAttribute("class", "cardInicial__baixo__cheio");
        likeCheio.src = "https://github.com/Camilabsm/meu-site/blob/master/img/likeCheio.png";
        likeCheio.alt = "Ícone de curtida cheio";

        const numeroCurtida = document.createElement("p");
        numeroCurtida.setAttribute("class", "cardInicial__baixo__numero");
        numeroCurtida.textContent = "1";

        cardBaixo.appendChild(likeCheio);
        cardBaixo.appendChild(numeroCurtida);

        componentRoot.appendChild(cardTop); //dá um filho ao pai principal, que é o componentRoot. Dessa forma, atrela o filho cardLeft ao pai componentRoot
        componentRoot.appendChild(cardMeio);
        componentRoot.appendChild(cardBaixo);

        return componentRoot; //o componente principal deve sempre ser retornado para que o componente retorne todo o conteúdo que foi feito na build
    }

    //estilização do componente
    styles(){
        const style = document.createElement("style"); //cria o elemento de estilização
        style.textContent = `
        .cardInicial{
            display: flex;
            flex-direction: column;
            justify-content: left;
            padding: 1rem 0.2rem 0.2rem 1rem;
            background-color: #FFFFFF;
            -webkit-box-shadow: 5px 5px 2px 0px rgba(53,38,55,0.5);
            -moz-box-shadow: 5px 5px 2px 0px rgba(53,38,55,0.5);
            box-shadow: 5px 5px 2px 0px rgba(53,38,55,0.5);
            width: 100%;
            font-family: 'Quicksand', sans-serif;
            margin: 0;
        }

        p{
            margin: 0.8rem 0;
        }

        .cardInicial__top{
            display: flex;
            gap: 0.5rem;
            align-items: center;
        }

        .cardInicial__top__nome, .cardInicial__top__handle{
            font-size: 0.6rem;
            color: var(--grafite);            
        }

        .cardInicial__top__nome{
            font-weight: 600;
        }

        .cardInicial__top__foto{
            width: 40px;
        }

        .cardInicial__meio{
            margin-bottom: 0.2rem;
        }

        .cardInicial__baixo{
            display: flex; 
            align-items: center;
            gap: 0.8rem;
        }

        .cardInicial__baixo__cheio {
            width: 1rem;
        }

        @media screen and (min-width: 728px){
            .cardInicial{
                padding: 1rem 1rem 0.2rem 1rem;
            }

            .cardInicial__top__nome, .cardInicial__top__handle{
                font-size: 0.7rem;
            }
        }
        ` //inclui no conteúdo do elemento de estilização. a escrita é tal qual como se estivesse escrevendo em um arquivo .css.

        return style; //retorna o elemento principal para ser acoplado à shadow.
    }
}

customElements.define("card-inicial", CardInicial);


