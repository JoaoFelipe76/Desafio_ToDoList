# To-Do List Application

Uma aplicação para gerenciamento de tarefas, desenvolvida com **Node.js/Express** no back-end e **React** no front-end. Este projeto permite que os usuários criem, atualizem, removam e listem tarefas, com autenticação e autorização seguras.

## 🛠 Tecnologias Utilizadas

### Back-End:
- **Node.js**: Plataforma para construir a API.
- **Express.js**: Framework para gerenciamento de rotas e middlewares.
- **MongoDB**: Banco de dados não relacional para armazenar usuários e tarefas.
- **Redis**: Utilizado como cache para controle de acesso com JWT.
- **JWT (JSON Web Tokens)**: Implementação de autenticação e autorização.
- **Mongoose**: ODM (Object Data Modeling) para interagir com MongoDB.

### Front-End:
- **React.js**: Biblioteca para construção da interface do usuário.
- **Axios**: Cliente HTTP para comunicação com a API.
- **CSS Modules**: Estilização da aplicação de forma modular.
- **React Hooks**: Utilizado para gerenciar o estado e os ciclos de vida dos componentes de forma eficiente.

### Justificativa:
- O uso de **Node.js** e **Express** permite a criação de APIs leves e escaláveis.
- **MongoDB** foi escolhido devido à flexibilidade em armazenar documentos JSON, ideal para o modelo de tarefas.
- **React** foi utilizado no front-end por sua eficiência na construção de interfaces dinâmicas e componentizadas.
- O cache com **Redis** melhora o desempenho na autenticação e autorização.

---

## ⚙️ Funcionalidades da Aplicação

1. **Gerenciamento de Usuários**:
   - Cadastro de usuários com email e senha.
   - Login com autenticação via JWT.
   
2. **Gerenciamento de Tarefas**:
   - Adicionar nova tarefa (com título, descrição e status).
   - Atualizar o status de uma tarefa (pendente ou completa).
   - Remover tarefa.
   - Listar todas as tarefas completas ou incompletas associadas ao usuário.
   
3. **Validações e Segurança**:
   - Sanitização de entradas para prevenir injeções de código.
   - Validação de dados (como email válido e campos obrigatórios).

---

## 🚀 Instruções de Instalação

### Pré-requisitos:
- Node.js (versão 16+)
- MongoDB
- Redis

### Back-End

1. **Configuração das Variáveis de Ambiente:**
   Crie um arquivo `.env` na pasta `backend` com as seguintes variáveis:

   ```env
   MONGO_URI=mongodb://localhost:27017/todolist
   REDIS_HOST=localhost
   REDIS_PORT=6379
   JWT_SECRET=sua_chave_secreta
   
2. **Instalar dependências e iniciar o servidor:**

    ```env
   npm install
   npm run dev

  A API estará disponível em http://localhost:5000.


### Front-End

1. **Instalar dependências e iniciar o projeto:**
   ```env
   cd frontend
   npm install
   npm start


 O front-end estará disponível em http://localhost:3000.

 ---

 ## 📄 Documentação das Rotas (API)

 
### Rotas de Autenticação:

- POST /register: Registro de um novo usuário.
- POST /login: Login de um usuário, retornando o token JWT.

### Rotas de Tarefas:

- POST /create-to-do: Criar uma nova tarefa. (Requer autenticação via token)
- GET /get-all-to-do/:userId: Listar todas as tarefas de um usuário. (Requer autenticação via token)
- PATCH /update-to-do/:id: Atualizar uma tarefa. (Requer autenticação via token)
- DELETE /delete-to-do/:id: Deletar uma tarefa. (Requer autenticação via token)

---

## 🖼️ Imagens do Projeto

### Tela Inicial / Home

A tela inicial (ou home) é a primeira vista do usuário após acessar a aplicação. Nela, o usuário tem acesso às opções de login ou cadastro, caso ainda não tenha uma conta.

![image](https://github.com/user-attachments/assets/4e449e4b-63ed-421f-b1cc-e1b1455ac5e1)

### Tela de Cadastro

O usuário pode criar uma conta fornecendo seu nome, sobrenome, nome de usuário, e senha. Após o registro, ele poderá acessar a aplicação e gerenciar suas tarefas.

![image](https://github.com/user-attachments/assets/5df6eefc-24af-434b-96a8-177c23689710)


### Tela de Login

Nesta tela, o usuário realiza o login utilizando seu nome de usuário e senha. Após a autenticação, um token JWT é gerado e enviado ao front-end para garantir o acesso às rotas protegidas da aplicação.

![image](https://github.com/user-attachments/assets/4575978e-a798-453c-8bfe-16ff43c6a9de)

### Listando Tarefas Pendentes e Concluídas

Na tela principal (dashboard), o usuário pode visualizar suas tarefas organizadas entre pendentes e concluídas. Tarefas incompletas são exibidas com uma opção para marcar como concluídas, enquanto as tarefas completas têm uma visualização distinta.

![image](https://github.com/user-attachments/assets/7a955ae1-9f59-4d51-b38f-95d532334b64)
![image](https://github.com/user-attachments/assets/15cbe9db-5259-48c2-a1b3-19b1a3f52e72)


### Criando Tarefas

O usuário pode criar uma nova tarefa fornecendo título, descrição e status (pendente ou completa). A tarefa será salva no banco de dados e aparecerá na lista de tarefas do dashboard.

![image](https://github.com/user-attachments/assets/5698291d-2edd-49db-bbf2-5a420d648280)

### Editando Tarefa

O usuário pode editar uma tarefa existente, alterando seu título, descrição ou status.

![image](https://github.com/user-attachments/assets/addeda45-e26c-4f7b-bc02-72a1ad3b5af2)

### Deletando Tarefa

O usuário pode excluir tarefas da lista. Ao clicar na opção de deletar, a tarefa será removida do banco de dados.

![image](https://github.com/user-attachments/assets/8044eaed-778a-4aa4-9a11-59789761b842)

### Pesquisa de Tarefas

O usuário pode pesquisar tarefas específicas através de uma barra de pesquisa. Basta digitar o nome ou parte do título da tarefa que o sistema exibirá as tarefas que correspondem ao critério de busca. Isso facilita a localização de tarefas no caso de listas grandes.

![image](https://github.com/user-attachments/assets/3cfcd00b-481f-43d5-8973-d3abd3e765d6)

### Integração com Redis

O Redis é utilizado como cache para melhorar o desempenho das operações de autenticação e controle de acesso via tokens JWT. A utilização do Redis também ajuda a reduzir a carga no banco de dados e a garantir respostas mais rápidas para as requisições.

![image](https://github.com/user-attachments/assets/897be9e9-3e2c-4562-8345-1f3a22f375d3)


---
