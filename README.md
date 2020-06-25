<img alt="GoStack" src="https://storage.googleapis.com/golden-wind/bootcamp-gostack/header-desafios.png" />
<h2 align="center">
  Desafios Bootcamp GoStack
</h2>

<p align="center">
  <a href="README.en.md">English</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="README.md">Português</a>&nbsp;&nbsp;&nbsp;
</p>


# Conceitos Nodejs

2° desafio do bootcamp GoStack - Criar uma API que irá permitir a criação, listagem, atualização e remoção dos repositórios do "GitHub", e além disso permitir que os repositórios possam receber "likes"

Essa é uma aplicação básica para fixar os conceitos de uma API http utilizando o express, as os dados gerados ficam armazenados localmente em um array e a cada alteração esse array é zerado.

Para inicializar o projeto devemos nos certificar que o yarn esta instalado, em seguida vá para o diretório src e execute o comando "yarn" para instalar as dependencias. 

Para deixar a aplicação em pé devemos executar o comando yarn dev, ele ira roda o nodemon, permitindo assim que as alterações sejam refletidas sem a necessidade de reiniciar o servidor, como podemos observar o servidor esta configurado para rodar em http://localhost:3333.

Também esta disponível uma rotina de testes automatizados para verificar se as chamadas da API esta funcionando corretamente, os testes ficam no diretório _test_ e para executar os testes é necessário rodar o seguinte comando: "yarn test"

Como um desafio futuro, podemos integrar nosso projeto á API do github.

Obrigado!
