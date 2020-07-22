const inputElement = document.querySelector("input");

const btnElement = document.querySelector("button");

let repos = [];
// função para adicionar repositorios na lista
function adcRepos(){
    const ulTag = document.querySelector("ul");
    for(let i = 0; i < repos.length; i++){
        const createLi = document.createElement("li");
        ulTag.appendChild(createLi);

        const liElement = document.querySelectorAll("li");
        liElement[i].textContent = repos[i];
    }
}
async function BuscaApi(user){
    // caso responda com sucesso :
    try{
        const response = await axios.get(`https://api.github.com/users/${user}/repos`);
        const data = response.data;
        for(let i = 0; i < data.length; i++){
            // cada repositorio na api é adicionado no vetor repos
            repos.push(response.data[i].name);
        }
        // executa a função para adicionar repositorios na lista
        adcRepos();
    // caso responda com um erro
    }catch(error){
        console.warn(error);
        alert(error);
    };
};
btnElement.onclick = () => {
    const ulTag = document.querySelector("ul");
    // esvazia a lista caso existam itens
    ulTag.innerHTML = "";

    const createLi = document.createElement("li");
    ulTag.appendChild(createLi);
    const liElement = document.querySelector("li");
    // cria uma item na lista informando que a consulta esta carregando
    liElement.textContent = "...carregando...";
    // inicia a consulta na api
    BuscaApi(inputElement.value)    
    // esvazia o vetor de repositorio para uma nova consulta
    repos = [];
    inputElement.value = "";
}
