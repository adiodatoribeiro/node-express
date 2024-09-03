#Tecnologia usada:

![JavaScript](https://skillicons.dev/icons?i=js)

-Descrição do Projeto
 
1 Foi implementado um middleware simples de autenticação que verifica um token de autorização antes de permitir o acesso às rotas.

1.1 O MiddleWare intercepta a requisição antes que ela chegue à rota final.

1.2 Foi criado em nossa aplicação rotas públicas e privadas, configuradas com middleware para autenticação e testadas usando Insomnia.

2 Foi cirado um tokens JWT para autenticação de usuários. O middleware foi configurado para verificar esses tokens nas rotas privadas.

3 Por último, foi usado a biblioteca donEnv para gerenciar variáveis de ambiente, tornando a aplicação mais segura ao armazenar informações sensíveis fora do código-fonte.
