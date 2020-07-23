import axios from "axios";
class App{
    // metodo e instanciado assim que a classe e chamada
    constructor(){
        // array que recebertodos os repositorios
        this.repositorio =[];
        // seleciona a tag form
        this.form = document.getElementById("repo-form");
        this.list = document.getElementById("repo-list");
        // instancia o metodo
        this.registerHandler();

    }
    registerHandler(){
        // ao submeter o formulario instaciara o metodo
        this.form.onsubmit = event => this.addRepository(event);
    };
    addRepository(event){
        // ao ser submetido o formulario nao recarregara a pagina
        event.preventDefault();


        // this.repositorio recebera o seguinte objeto
        this.repositorio.push({
            nome: "P-L-T-S",
            description: "Alguma coisa que eu não sei oq é pq to com preguiça",
            avatar_url: "https://avatars0.githubusercontent.com/u/57147101?v=4",
            html_url: "https://api.github.com/users/P-L-T-S"
        });
        // exibe o repositorio no console
        console.log(this.repositorio);
        this.render();
    };
    render(){
        this.list.innerHTML = "";
        
        this.repositorio.forEach(item => {
            let {nome, description, avatar_url, html_url} = item;

            // cria um item para cada item no repositorio
            this.createItem = document.createElement("li");
            // insere a tag li dentro da tag ul
            this.list.appendChild(this.createItem);

            // cria uma imagem
            let image = document.createElement("img");
            // endereco da imagem recebe a url do avatar
            image.setAttribute("src", avatar_url);

            // cria o titulo do item
            let title = document.createElement("strong");
            // insere um valor dentro da titulo
            title.textContent = nome;

            // cria a tag p
            let text = document.createElement("p");
            // defini o conteudo do texto
            text.textContent = description;

            // cria um link
            let link = document.createElement("a");
            // defini o endereco do link
            link.setAttribute("href", html_url);
            // faz com q  o link abra em outra guia
            link.setAttribute("targer", "_blank");
            link.textContent = html_url;

            // insete a imagem dentro li
            this.createItem.appendChild(image);
            // insere o titulo no lista
            this.createItem.appendChild(title);
            // insere a descricao na lista
            this.createItem.appendChild(text);
            // insere o link na lista
            this.createItem.appendChild(link);
        })
        

    }
};
// instancia a classe
new App();