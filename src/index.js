import React from 'react';
import ReactDom from 'react-dom';

const App = () => {
    return <p>Olá Mundo!</p>
}

ReactDom.render(<App />, document.querySelector("#root"));
