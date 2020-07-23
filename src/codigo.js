/* import axios from "axios";

const inputElement = document.querySelector("input");

const btnElement = document.querySelector("button");

let repos = [];

// função para adicionar repositorios na lista
function adcRepos(){
    const ulTag = document.querySelector("ul");

    repos.map((item, indice) => {
        const createLi = document.createElement("li");
        ulTag.appendChild(createLi);

        const liElement = document.querySelectorAll("li");
        liElement[indice].textContent = item;
        
    })
}
async function BuscaApi(user){
    // caso responda com sucesso :
    try{
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);
        const {data} = response;

        data.map(item => {
            repos.push(item.name);
        });

        // executa a função para adicionar repositorios na lista
        adcRepos();
    // caso responda com um erro
    }catch(error){
        console.warn(error);
        alert(`Não foi possivel achar ${user}`);
    };
};
btnElement.onclick = () => {
    const ulTag = document.querySelector("ul");
    // esvazia a lista caso existam itens
    ulTag.innerHTML = "";

    const createLi = document.createElement("li");
    ulTag.appendChild(createLi);
    const liElement = document.querySelector("li");

    ulTag.setAttribute("class", "border");

    // cria um item na lista informando que a consulta esta carregando
    liElement.textContent = "...carregando...";

    ulTag.innerHTML = "";

    // inicia a consulta na api
    BuscaApi(inputElement.value)    

    // esvazia o vetor de repositorio para uma nova consulta
    repos = [];
    inputElement.value = "";
} */