import React, {useState} from "react";

const Cliques = () => {
const [nrCliques, setNrCliques] = useState(0);
return(
    <div>
        <button onClick={()=> setNrCliques(nrCliques+1)}>Clique Aqui...</button>
        <button onClick={()=> setNrCliques(nrCliques-1)}>Tira um Aqui...</button>
        <p>{nrCliques} cliques</p>
    </div>
);
};

/* class Cliques extends React.Component{
    constructor(props){
        super(props);
        this.state = {numeroCliques: 0};
    }

    render() {
        return(
            <div>
                <p>Número de Cliques: {this.state.numeroCliques}</p>
                <button onClick={()=>{this.setState({numeroCliques: this.state.numeroCliques +1})}}>Clique Aqui...</button>
            </div>
            )
    }
} */

export default Cliques;