# conceitos-nodejs

1° desafio do bootcamp GoStack - Criar uma API  que irá permitir a criação, listagem, atualização e remoção dos repositórios do Github, e além disso permitir que os repositórios possam receber "likes"

Essa é uma aplicação básica para fixar os conceitos de uma API http utilizando o express, as os dados gerados ficam armazenados localmente em um array e a cada alteração esse array é zerado.

Para inicializar o projeto devemos nos certificar que o yarn esta instalado, em seguida vá para o diretório src e execute o comando "yarn dev"

Ao executar o comando yarn dev, a aplicação ira rodar o nodemon, permitindo assim que as alterações sejam refletidas sem a necessidade de reiniciar o servidor, como podemos observar o servidor esta configurado para rodar em http://localhost:3333.

Também esta disponível uma rotina de testes automatizados para verificar se o CRUD esta funcionando corretamente, os testes ficam no diretório _test_ e para executar os testes é necessário rodar o seguinte comando: "yarn test"

Como um desafio futuro, podemos integrar nosso projeto á API do github.

Obrigado!
