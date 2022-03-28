# GCB Test: Healthy Eating

<img src="./public/assets/img/Gif.gif" width="800px" height="400px" alt="Gif do Teste">

>  The Project is a test that simulates a website of recipes for healthy foods. Inside it has a Registration and Login system.

Check the Application: https://healthy-foood.netlify.app <br>
Video showing the application: https://www.youtube.com/watch?v=jwgasXZhZMQ
## :page_facing_up: Explanation

A primeira página do projeto é a de login que apresenta um campo de email e senha. Os dois campos poderão ser preenchidos, após criar uma conta na página de registro e terem o acesso para a página principal.

A página de registro apresenta 7 campos para serem preenchidos, sendo: nome, email, senha, confirmação de senha, data de nascimento, CPF e CEP. Os campos possuem uma validação, então precisam dos requisitos exigidos, sendo: não deixar um campo vazio, um email válido, uma senha de no mínimo 6 dígitos, o campo de senha e de confirmação de senha devem ser iguais, o CPF ter no mínimo e no máximo 11 dígitos e o CEP precisa ser um existente, pois está sendo preenchido com a API dos correios.  Caso, não seja preenchido corretamente. Na tela aparecerá um alerta notificando que precisa de mudança.

Após a criação da conta, os dados serão armazenados no Firebase que possibilitarão o acesso pela página de login. O login deve ser preenchido com o email idêntico ao que foi registrado, então letras maiúsculas e minúsculas devem ser seguidas. A senha também segue as condições do email, e possui uma página específica para a recuperação de senha, que através do Firebase um email será enviado para o usuário. Ao logar, a pessoa será direcionada para a página principal que possui algumas seções e um menu com a opção de entrar no seu perfil que apresenta as informações do usuário e outro botão de logout que desloga você da página. A página de home está responsiva e com um menu hambúrguer ao chegar nos 800 de largura de resolução.  Além disso, foi adicionado um carrossel na seção de “Read Our Blog”.

Não tem como acessar a página de home sem estar logado, pois ela está como uma rota privada, então precisa registrar uma conta. Com isso, para se deslogar é só clicar no botão do menu como dito no parágrafo acima.
Em caso de o usuário tentar acessar alguma rota inexistente, ele será direcionado para uma página que exibe o Erro 404 e logo abaixo um link para ser direcionado a página de Login.

O link do vídeo do Youtube apresentando todo o projeto está logo acima.

## 📁 Pages

The site consists of 6 different pages:

- **Login:** The person can place them to place the data that has registered and to enter in the main page.
- **Register:** The person can create their account on this page.
- **Forgot Password:** The person can enter their email and receive a message in the email to reset their password.
- **Home:** It is the main page of the project that presents a website of healthy recipes.
- **Profile Informations:** A page that presents the data that the person has entered into the record.
- **Error 404:** A page that appears when a person enters a route does not exist. Thus, just below presents a link to return to the login page.
## :dart: Features ##

:heavy_check_mark: Healthy Eating Landing Page;\
:heavy_check_mark: Register Page;\
:heavy_check_mark: Login Page;\
:heavy_check_mark: Forgot Password Page;\
:heavy_check_mark: Error 404 Page;\
:heavy_check_mark: Use the Post Office API to fill in the other fields that make up the address;\
:heavy_check_mark: Store form data in Firebase;\
:heavy_check_mark: Create the hamburger menu in the header;\
:heavy_check_mark: Store form data in Firebase;\
:heavy_check_mark: Password Reset with Firebase;\
:heavy_check_mark: Home Private Route;\
:heavy_check_mark: Button Logout;\
:heavy_check_mark: Creating the page that shows the user information;\
:heavy_check_mark: Home Private Route;

## :rocket: Technologies ##

The following tools were used in this project:

- [Html](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/html/)  
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)  
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) 
- [React](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Yup](https://www.npmjs.com/package/yup)
- [SweetAlert2](https://sweetalert.js.org/docs/)  
- [Toast](https://fkhadra.github.io/react-toastify/introduction/)
- [Firebase](https://firebase.google.com/docs?hl=pt)  
- [LocalStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [Carousel](https://www.npmjs.com/package/react-multi-carousel)
- [React Icon](https://react-icons.github.io/react-icons/)



## :closed_book: Requirements ##

Before starting :checkered_flag:, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed.

## :checkered_flag: Starting ##

```bash
# Clone this project
$ git clone COLOCAR O LINK DO GITHUB
# Access
$ cd teste-gcb
# Install dependencies
$ yarn or npm 
# Run the project
$ yarn start or npm start 
# The server will initialize in the <http://localhost:3000>
```

## 🤝 Collaborators

We thank the following people who contributed to this project:

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

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

&#xa0;

<a href="#top">Back to top</a>
