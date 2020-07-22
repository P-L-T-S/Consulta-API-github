# Consulta-API-github
Criei esse código para fazer consulta na api do github
E exibir em uma lista os repositórios do usuário.

Vou configurar o babel para converter o codigo ES6+ em codigo lido pelo navegador.

Necessario instalar as seguintes de pendencias:
    "dependencies": {
        "axios": "^0.19.2"
    },
Necessario instalar as seguintes dependencias de desenvolvimento:
//adicionar -D para adicionar dp de dev
    "devDependencies": {
        "@babel/cli": "^7.10.5",
        "@babel/core": "^7.10.5",
        "@babel/plugin-transform-async-to-generator": "^7.10.4",
        "@babel/polyfill": "^7.10.4",
        "@babel/preset-env": "^7.10.4",
        "babel-loader": "^8.1.0",
        "webpack": "^4.43.0",
        "webpack-cli": "^3.3.12",
        "webpack-dev-server": "^3.11.0"
    },

Para facilitar, criar o seguinte scipt:
    "scripts"{
        "dev": "webpack-dev-server --mode=development"
    }

configuracoes para o webpack:
    module.exports = {
        entry: ["@babel/polyfill","./src/codigo.js"],
        output: {
            path: __dirname + "/public",
            filename: "bundle.js"
        },
        devServer:{
            contentBase: __dirname + "/public",
        },
        module: {
            rules:[
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: {
                        loader: "babel-loader",
                    },
                },
            ],
        },
    };