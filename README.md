# Agenda de contatos desenvolvida com React

## Funções
* Cadastrar contato
* Apagar contatos
* Atualizar contatos
* Buscar contatos

## Capturas de tela

| ![principal](https://i.postimg.cc/gjrDspGB/localhost-3005.png) | ![novo contato](https://i.postimg.cc/y6rndDPq/localhost-3005-novo.png) |
|--|--|
| ![editar contato](https://i.postimg.cc/8P2HRx9t/localhost-3005-edit.png) | ![apagar contato](https://i.postimg.cc/sg5JwwRy/localhost-3005-del.png) |

## Uso do aplicativo

### 1. Clone o repositório
```
git clone https://github.com/alfredojry/agenda.git
```
### 2. Configuração da API REST local
Ir ao diretório do projeto
```
cd agenda
```
No diretório raiz do projeto, já temos o arquivo database `db.json`

```
{
  "contatos": [
    {
      "id": 1,
      "nome": "Bender Bending Rodríguez",
      "email": "shinymetalass@futurama.com",
      "telefone": "010101-101010"
    }
}
```

Instalar o pacote JSON Server
```
npm install json-server
```
Iniciar o servidor JSON Server
```
npx json-server --watch db.json
```
Sua base de dados estará servida desde http://localhost:3000/contatos

### 3. Executar o projeto
O projeto já está configurado para correr na porta **3005**, devido a que a porta **3000** está sendo usada pela API local. Se deseja trocar de porta, configurar a variável `PORT` no arquivo `.env` a outra porta disponível.

Iniciar o projeto
```
npm install
npm start
```
O projeto estará correndo em http://localhost:3005/
