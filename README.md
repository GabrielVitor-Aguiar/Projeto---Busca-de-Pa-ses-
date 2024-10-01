# 🌍 Projeto de Busca de Países

Este projeto é uma plataforma web que consome a API [RestCountries](https://restcountries.com/v3.1/all) para listar e exibir informações detalhadas sobre países ao redor do mundo. A plataforma permite que os usuários explorem a lista de países, apliquem filtros e ordenações, e visualizem informações mais profundas sobre um país específico.

## 💯 Sobre o Desafio

O objetivo deste projeto é criar uma interface interativa e responsiva, onde os usuários possam navegar facilmente pela lista de países, buscar por um país específico, aplicar filtros, e visualizar os detalhes de um país selecionado.

### 🗂️ 1.1 Tela de Listagem de Países

A tela de listagem de países permite ao usuário explorar e descobrir países ao redor do mundo. Ela possui as seguintes funcionalidades:

#### Funcionalidades

- **Consumo de API:** 
  - A lista de países é obtida através da API [RestCountries](https://restcountries.com/v3.1/all) utilizando uma requisição GET.
  
- **Exibição dos Países:**
  - A interface exibe informações como o nome, bandeira, capital e região de cada país.
  - A listagem é paginada ou utiliza scroll infinito (a API não suporta paginação, então essa funcionalidade é implementada no lado do cliente).

- **Busca por Nome:**
  - Há um campo de busca que permite ao usuário procurar por um país específico pelo nome.

- **Filtros:**
  - Filtro por sub-região.
  - Filtro por região.
  - Filtro por população, com intervalos: 
    - `< 1M`
    - `1M - 10M`
    - `10M - 100M`
    - `> 100M`

- **Ordenação:**
  - Ordenação por nome do país.
  - Ordenação por população.
  - Ordenação por área.

- **Navegação:**
  - Ao clicar em um país na listagem, o usuário é redirecionado para a Tela de Detalhes do País selecionado.

### 🎏 1.2 Tela de Detalhes do País

A Tela de Detalhes do País oferece uma visão detalhada de um país selecionado a partir da tela de listagem.

#### Funcionalidades

- **Exibição de Informações Detalhadas:**
  - Nome oficial do país.
  - Bandeira.
  - Capital.
  - Região e sub-região.
  - População.
  - Área.
  - Idiomas falados.
  - Moedas.
  - Fuso horário.
  - Domínio de internet (código TLD).
  - Código de discagem internacional.

- **Navegação de Volta:**
  - Há um botão ou link para retornar à Tela de Listagem de Países.

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura básica do projeto.
- **CSS3:** Estilização da interface, garantindo responsividade e acessibilidade.
- **JavaScript (ES6+):** Manipulação de dados da API e interatividade da interface.
- **API RestCountries:** Fonte de dados para as informações sobre os países.
  
## 🚀 Como Executar o Projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/seu-repositorio.git
2. Acesse o repositório
   ```
   cd seu-repositorio
