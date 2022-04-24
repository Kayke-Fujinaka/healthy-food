# Healthy Food

<img src="./public/assets/img/Gif.gif" alt="Gif do Teste">

>  O Projeto é um teste que simula um site de receitas de alimentos saudáveis. Dentro dele tem um sistema de Cadastro e Login.

Confira a aplicação: https://healthy-foood.netlify.app <br>
Vídeo da aplicação: https://www.youtube.com/watch?v=jwgasXZhZMQ
## :page_facing_up: Explicação

A primeira página do projeto é a de login que apresenta um campo de email e senha. Os dois campos poderão ser preenchidos, após criar uma conta na página de registro e terem o acesso para a página principal.

A página de registro apresenta 7 campos para serem preenchidos, sendo: nome, email, senha, confirmação de senha, data de nascimento, CPF e CEP. Os campos possuem uma validação, então precisam dos requisitos exigidos, sendo: não deixar um campo vazio, um email válido, uma senha de no mínimo 6 dígitos, o campo de senha e de confirmação de senha devem ser iguais, o CPF ter no mínimo e no máximo 11 dígitos e o CEP precisa ser um existente, pois está sendo preenchido com a API dos correios.  Caso, não seja preenchido corretamente. Na tela aparecerá um alerta notificando que precisa de mudança.

Após a criação da conta, os dados serão armazenados no Firebase que possibilitarão o acesso pela página de login. O login deve ser preenchido com o email idêntico ao que foi registrado, então letras maiúsculas e minúsculas devem ser seguidas. A senha também segue as condições do email, e possui uma página específica para a recuperação de senha, que através do Firebase um email será enviado para o usuário. Ao logar, a pessoa será direcionada para a página principal que possui algumas seções e um menu com a opção de entrar no seu perfil que apresenta as informações do usuário e outro botão de logout que desloga você da página. A página de home está responsiva e com um menu hambúrguer ao chegar nos 800 de largura de resolução.  Além disso, foi adicionado um carrossel na seção de “Read Our Blog”.

Não tem como acessar a página de home sem estar logado, pois ela está como uma rota privada, então precisa registrar uma conta. Com isso, para se deslogar é só clicar no botão do menu como dito no parágrafo acima.
Em caso de o usuário tentar acessar alguma rota inexistente, ele será direcionado para uma página que exibe o Erro 404 e logo abaixo um link para ser direcionado a página de Login.

O link do vídeo do Youtube apresentando todo o projeto está logo acima.

## 📁 Páginas

O site é composto por 6 páginas diferentes:

- **Login:** A pessoa pode colocá-los para colocar os dados que cadastrou e entrar na página principal.
- **Cadastre-se:** A pessoa pode criar sua conta nesta página.
- **Esqueci a senha:** A pessoa pode digitar seu e-mail e receber uma mensagem no e-mail para redefinir sua senha.
- **Home:** É a página principal do projeto que apresenta um site de receitas saudáveis.
- **Informações do perfil:** Uma página que apresenta os dados que a pessoa inseriu no registro.
- **Erro 404:** Uma página que aparece quando uma pessoa entra em uma rota que não existe. Assim, logo abaixo apresenta um link para retornar à página de login.
## :dart: Etapas ##

:heavy_check_mark: Página Home;\
:heavy_check_mark: Responsividade da página Home;\
:heavy_check_mark: Página de Registro;\
:heavy_check_mark: Responsividade da página de Registro;\
:heavy_check_mark: Página de Login;\
:heavy_check_mark: Responsividade da página de Login;\
:heavy_check_mark: Página para redefinir a senha;\
:heavy_check_mark: Página Error 404;\
:heavy_check_mark: API dos correios para preencher os demais campos que compõem o CEP;\
:heavy_check_mark: Cria o menu de hambúrguer no Header;\
:heavy_check_mark: Armazenar dados do formulário no Firebase;\
:heavy_check_mark: Redefinição de senha com Firebase;\
:heavy_check_mark: Rota Privada da Home;\
:heavy_check_mark: Botão para dar Logout;\
:heavy_check_mark: Criando a página que mostra as informações do usuário;\
:heavy_check_mark: Rota Privada Home;\
:heavy_check_mark: Finalizado;

## :rocket: Tecnologias ##

Neste projeto foram utilizadas as seguintes ferramentas:

- [ReactJs](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Yup](https://www.npmjs.com/package/yup)
- [SweetAlert2](https://sweetalert.js.org/docs/)  
- [Toast](https://fkhadra.github.io/react-toastify/introduction/)
- [Firebase](https://firebase.google.com/docs?hl=pt)  
- [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [Carousel](https://www.npmjs.com/package/react-multi-carousel)
- [React Icon](https://react-icons.github.io/react-icons/)



## :closed_book: Requisitos ##

Antes de iniciar :checkered_flag:, você precisa ter [Git](https://git-scm.com) e [Node](https://nodejs.org/en/) instalados.

## :checkered_flag: Iniciando ##

```bash
# Clone this project
$ git clone https://github.com/Kayke-Fujinaka/HealthyFood
# Access
$ cd teste-gcb
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn start or npm start 
# The server will initialize in the <http://localhost:3000>
```

## 🤝 Colaboradores

Agradecemos às seguintes pessoas que contribuíram para este projeto:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="140px;" alt="Foto do Kayke Fujinaka no GitHub"/><br>
        <sub>
          <b>Kayke Alves Fujinaka</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 Licença

Este projeto está sob licença. Consulte o arquivo [LICENSE](LICENSE.md) para obter mais detalhes.

&#xa0;

<a href="#top">Volte para o Topo</a>
