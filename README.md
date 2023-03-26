<h1 align="center">🍉 HealthyFood</h1>

![Gif do Teste](./public/assets/img/Gif.gif)

> The project is a test that simulates a healthy food recipe website. It includes a registration and login system.

Check out the application: https://healthy-foood.netlify.app <br>
Video of the application: https://www.youtube.com/watch?v=jwgasXZhZMQ

## :page_facing_up: Explanation

The first page of the project is the login page which features fields for email and password. Both fields can be filled after creating an account on the registration page and gaining access to the main page.

The registration page features 7 fields to be filled in: name, email, password, password confirmation, date of birth, CPF, and CEP. The fields are validated, so they must meet certain requirements, such as not leaving a field blank, a valid email, a password of at least 6 digits, the password and password confirmation fields must match, the CPF must have a minimum and maximum of 11 digits, and the CEP must be an existing one, as it is being filled in with the Post Office API. If not filled in correctly, an alert will appear on the screen notifying the user that changes need to be made.

After creating an account, the data will be stored in Firebase, which will enable access through the login page. The login must be filled in with the identical email registered, so upper and lowercase letters must be followed. The password also follows the email's conditions and has a specific page for password recovery, where an email will be sent to the user through Firebase. When logging in, the user will be directed to the main page, which features several sections and a menu with the option to enter their profile, which displays user information, and another logout button that logs you out of the page. The home page is responsive and features a hamburger menu when the resolution reaches 800 width. In addition, a carousel has been added to the "Read Our Blog" section.

It is not possible to access the home page without being logged in because it is a private route, so you need to register an account. To log out, just click the menu button as mentioned in the above paragraph. In case the user tries to access a nonexistent route, they will be directed to a page displaying Error 404 and a link below to return to the login page.

The link to the Youtube video presenting the entire project is above.

## 📁 Pages

The site is composed of 6 different pages:

- **Login:** Users can enter their registered data and log in to the main page.
- **Register:** Users can create their accounts on this page.
- **Forgot Password:** Users can enter their email and receive a message in their email to reset their password.
- **Home:** The main page of the project, which features a healthy food recipe website.
- **Profile Information:** A page that displays the data the user entered in registration.
- **Error 404:** A page that appears when a person enters a route that does not exist. Below it presents a link to return to the login page.

## :dart: Steps

:heavy_check_mark: Home page;\
:heavy_check_mark: Responsiveness of Home page;\
:heavy_check_mark: Registration page;\
:heavy_check_mark: Responsiveness of registration page;\
:heavy_check_mark: Login page;\
:heavy_check_mark: Responsiveness of login page;\
:heavy_check_mark: Password reset page;\
:heavy_check_mark: Error 404 page;\
:heavy_check_mark: API for filling in additional fields of the postal code;\
:heavy_check_mark: Creating a hamburger menu in the header;\
:heavy_check_mark: Storing form data in Firebase;\
:heavy_check_mark: Password reset with Firebase;\
:heavy_check_mark: Private Home route;\
:heavy_check_mark: Logout button;\
:heavy_check_mark: Creating a page that shows user information;\
:heavy_check_mark: Private Home route;\
:heavy_check_mark: Finished;

## :rocket: Technologies

The following tools were used in this project:

- [ReactJs](https://pt-br.reactjs.org/)
- [Axios](https://axios-http.com/docs/intro)
- [React Hook Form](https://react-hook-form.com/get-started)
- [Yup](https://www.npmjs.com/package/yup)
- [SweetAlert2](https://sweetalert.js.org/docs/)  
- [Toast](https://fkhadra.github.io/react-toastify/introduction/)
- [Firebase](https://firebase.google.com/docs?hl=pt)  
- [Local Storage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage)
- [Carousel](https://www.npmjs.com/package/react-multi-carousel)
- [React Icon](https://react-icons.github.io/react-icons/)

## :closed_book: Requirements ##

Before starting, you need to have [Git](https://git-scm.com) and [Node](https://nodejs.org/en/) installed on your computer.

## :checkered_flag: Getting Started ##

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

If you clone the project, you will need to create your own Firebase project. After that, put your Firebase token in the .env file. I'll leave an example below:

```bash
  API_KEY: "AIzah63dg9emUtIKmMCvrkSJLw-GZIl0a8qmEs",
  AUTH_DOMAIN: "example-8a13f.firebaseapp.com",
  PROJECT_ID: "example-8a13f",
  STORAGE_BUCKET: "example-88a13f.appspot.com",
  MESSAGING_SENDER_ID: "65936679370",
  APP_ID: "1:659905779370:web:16c3ac97ef413h13ga2d3",
  MEASUREMENT_ID: "G-BL1CGU42B6"
```

After that, pass it to the file where Firebase is located. For example:

```bash
  const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.MESSASING_SENDER_ID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASUREMENT_ID
};
```

## 🤝 Contributors

We want to thank the following people who contributed to this project:

<table>
  <tr>
    <td align="center">
      <a href="#">
        <img src="https://avatars.githubusercontent.com/u/98772000?s=400&u=80de9af672be7f75cc7a546838552cf63d5b82fe&v=4" width="100px;" alt="Kayke Fujinaka's photo on GitHub"/><br>
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
