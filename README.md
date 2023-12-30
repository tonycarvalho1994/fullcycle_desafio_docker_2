# FullCycle - Desafio Docker #2
O desafio consiste em disponibilizar um arquivo docker-compose que levanta a seguinte estrutura:
- **nginx** como proxy reverso
- **App Node** atrás do nginx
- **MySQL**

O nginx responde no endereço http://localhost:8080.
Ao ser acessado, faz um proxy para o serviço node, que por sua vez insere um nome aleatório na tabela `people` do banco MySQL, e em seguida retorna para o nginx uma resposta HTML contendo todos os nomes gravados no banco de dados.
Por fim, o nginx devolve a resposta HTML para o usuário.

Para levantar: `docker-compose up --build`
