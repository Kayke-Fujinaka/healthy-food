# GCB Test: Healthy Eating

<img src="./assets/img/Pokedex.gif" width="450px" alt="Gif do Teste">

>  The Project is a test that simulates a website of recipes for healthy foods. Inside it has a Registration and Login system.

Check the application: site

## :page_facing_up: Explanation

O projeto começa com uma Tela de Login em que necessita registrar uma conta para ter acesso à página principal. Na parte abaixo do botão escrito “Login” tem um link que direcionará para a página de criação de conta. 

A página de criação de conta tem o yup instalado, então necessita que digite um endereço de email válido, uma senha com mais de 6 dígitos, entre outras validações que adicionei. Além de possuir uma API dos correios para preencher os campos que compõe o endereço. O endereço de email e senha estão sendo armazenados no Firebase, pois criei uma função no registro que irá armazenar esses seguintes dados. Após criar a conta a pessoa será direcionada automaticamente para a tela de login, mas, caso digite alguma informação errada aparecerá um alerta na tela informando o tal erro.
Além disso, criei uma página de recuperação de senha e uma que ao digitar uma rota que não está no projeto será direcionado para a page 404.

Dentro da página principal, você tem o Landing Page do Healthy Food que criei um menu com a possibilidade de dar logout e ao deixar responsivo se transforma num menu hamburguer. Na seção de “Read Our Blog” tem um Carousel responsivo.

## :dart: Features ##

:heavy_check_mark: Healthy Eating Landing Page;\
:heavy_check_mark: Register Page;\
:heavy_check_mark: Login Page;\
:heavy_check_mark: Forgot Password Page;\
:heavy_check_mark: Error 404 Page;\
:heavy_check_mark: Use the Post Office API to fill in the other fields that make up the address;\
:heavy_check_mark: Store form data in Firebase;\
:heavy_check_mark: Create the hamburger menu in the header;\
:heavy_check_mark: Store form data in Firebase;

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
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="100px;" alt="Foto do Kayke Fujinaka no GitHub"/><br>
        <sub>
          <b>Kayke Fujinaka</b>
        </sub>
      </a>
    </td>
  </tr>
</table>

## 📝 License

This project is under license. See the [LICENSE](LICENSE.md) file for more details.

&#xa0;

<a href="#top">Back to top</a>
