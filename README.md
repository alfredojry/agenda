# Agenda de contatos desenvolvida com React

## Funções
* Cadastrar contato
* Apagar contatos
* Atualizar contatos
* Buscar contatos

## Uso do aplicativo
### 1. Configuração da API REST local
Instalar o pacote JSON Server
```
npm install json-server
```
Crea um arquivo `db.json` com a estrutura seguinte:
```
{
  "contatos": [
    {
      "id": 1,
      "nome": "Bender Bending Rodríguez",
      "email": "shinymetalass@futurama.com",
      "telefone": "010101-101010"
    },
    {
      "id": 2,
      "nome": "Antonio Calculon",
      "email": "calculon2dot0@futurama.com",
      "telefone": "1111-0000"
    }
  ]
}
```
Iniciar o servidor JSON Server
```
npx json-server --watch db.json
```
Sua base de dados estará servida desde http://localhost:3000/contatos

### 2. Executar o projeto
Clone o repositório
```
git clone https://github.com/alfredojry/agenda.git
```
O projeto já está configurado para correr na porta **3005**, devido a que a porta **3000** está sendo usada pela API local. Se deseja trocar de porta, configurar a variável `PORT` no arquivo `.env` a outra porta disponível.

Iniciar o projeto
```
npm start
```
O projeto estará correndo em http://localhost:3005/

