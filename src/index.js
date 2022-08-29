import React from 'react';
import ReactDom from 'react-dom';
import Feed from './Feed';
import Contato from './Contato';


const App = function() {
  //return <h1><Feed /></h1>;
  return <div><Contato /></div>;
};

ReactDom.render(<App />, document.querySelector("#root"));

// const data = new Date();
// data.getHours()

// const App = () => {
//   const mensagem = 'Olá Mundo';  
//   return <p>{mensagem}!</p>
// }

// const App = () => {
//   if (data.getHours() >0 && data.getHours() < 12) 
//     return <h3>Bom dia!</h3>
//   else if (data.getHours() > 12 && data.getHours() <18)
//     return <h3>Boa tarde!</h3>
//   else
//     return <h3>Boa noite! São {data.getHours()} horas</h3>
// }

// const App = function() {
//   return(
//     <div>
//       <label htmlFor='nome'>Nome: </label>
//       <input id='nome'/>
//     </div>
//   );
// };


