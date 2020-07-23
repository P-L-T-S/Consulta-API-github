import api from "./api";
class App{
    // metodo e instanciado assim que a classe e chamada
    constructor(){
        // array que recebertodos os repositorios
        this.repositorio =[];
        // array que recebe usuarios
        this.user = [];
        // seleciona a tag form
        this.form = document.getElementById("repo-form");
        this.list = document.getElementById("repo-list");
        this.repoUserInput = document.getElementById("repo-user");
        this.repository = document.getElementById("repository");
        this.input
        // instancia o metodo
        this.registerHandler();

    }
    isLoading(loading = true){
        if(loading === true){
            let load = document.createElement("h1");
            load.setAttribute("id", "loading");
            load.textContent = "...carregando...";
            this.list.appendChild(load);
        }
        else{
            let load = document.getElementById("loading").remove;
        };
    };
    registerHandler(){
        // ao submeter o formulario instaciara o metodo
        this.form.onsubmit = event => this.addRepository(event);
    };
    async addRepository(event){
        // ao ser submetido o formulario nao recarregara a pagina
        event.preventDefault();

        const intValue = this.repoUserInput.value;
        console.log(intValue)
        const repository = this.repository.value;
        console.log(repository)
        if(intValue.length === 0)
            return;
        this.isLoading();
            try{
            const response = await api.get(`/repos/${intValue}/${repository}`);
            let {name, description, html_url, owner:{avatar_url}} = response.data;
            // this.repositorio recebera o seguinte objeto
            this.repositorio.push({
                name,
                description,
                avatar_url,
                html_url,
            });
            this.isLoading(false)
            this.render();
        }catch(error){
            console.warn(error);
            alert(`Erro, favor verificar o usuario "${intValue}"`);
            this.isLoading(false);
        }
    };
    async addUser(){
         // ao ser submetido o formulario nao recarregara a pagina
         event.preventDefault();

         const intValue = this.repoUserInput.value;
         if(intValue.length === 0)
             return;
         this.isLoading();
             try{
             const response = await api.get(`/user/${intValue}`);
             let {name, description, html_url, owner:{avatar_url}} = response.data;
             // this.repositorio recebera o seguinte objeto
             this.repositorio.push({
                 name,
                 description,
                 avatar_url,
                 html_url,
             });
             this.isLoading(false)
             this.render();
         }catch(error){
             console.warn(error);
             alert(`Erro, favor verificar o usuario "${intValue}"`);
             this.isLoading(false);
         }
    }
    render(){
        this.list.innerHTML = "";
        
        this.repositorio.forEach(item => {
            let {name, description, avatar_url, html_url} = item;

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
            title.textContent = name;

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
        
    this.repoUserInput.value = "";
    }
};
// instancia a classe
new App();