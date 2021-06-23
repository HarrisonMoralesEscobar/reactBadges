// import React from 'react';
// import ReactDOM from 'react-dom';
// import 'bootstrap/dist/css/bootstrap.css';

// import './global.css';
// import App from './components/App';

// const container = document.getElementById('app');

// ReactDOM.render(<App />, container);

import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.css";
import './global.css';


import App from './components/App';


//const element = <h1>Hello, Platzi Badges!</h1>
// const element = React.createElement(
//   'a',
//   {href: 'https://platzi.com'},
//   'Ingresa a Platzi..'
//   );

// const name = 'Nicole';
// const suma = () => 3+3;
// const element = React.createElement(
//   'h1',
//   {},
//   `Hola soy ${name}`
// );

// const jsx = (
//   <div>
//     <h1>Hola, soy Harrison</h1>
//     <p>Soy ingenierdo de software.</p>
//   </div>
// );

// const element = React.createElement(
//   'div',
//    {},
//    React.createElement('h1',{},'Hola soy Harrison Morales Escobar'),
//    React.createElement('p',{},'Soy Ing de Sotware')
// )

const container = document.getElementById('app');

// firstName="Harrison"
// lastName="Morales"
// jobTitle="Frontend Engineer"
// avatarUrl="https://s.gravatar.com/avatar/1de368983b54fd73f2fac63d55ad2118?s=80"
// twitter="harrymoralese"

//ReactDOM.render(__que__ , __donde__);
ReactDOM.render(
<App/>,container);