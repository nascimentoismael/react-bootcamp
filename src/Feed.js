//import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import React from 'react';
import Evento from './Evento';


const carregando = () =>{
    return(
        <div class="ui feed">
            <div class="ui active inverted dimmer">
                <div class="ui text loader">
                    Carregando...
                </div>
            </div>
        <p></p>
        </div>
    );
}
    

class Feed extends React.Component {    
    constructor(props){
        super(props);
        this.state = {carregando: true, eventos: []};
    }
    
    render(){
        if(this.state.carregando){
            setTimeout(
                ()=> this.setState(
                    {carregando: false, eventos: eventosConst},
                    ),
                    1000
                )
            return carregando();
        }else{
            const componentesEventos = this.state.eventos.map(x=>
                (<Evento 
                    image = {x.image}
                    usuario={x.usuario} 
                    likes={x.likes} 
                    action={x.action}
                    date={x.date}
                    link={x.link}
                />)                    
            )
            
            return(
                <div className="ui feed">
                    {componentesEventos}
                </div>
            );
        }

    }
};

const eventosConst = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaCbwTQ_Zm4s8f4Ln3BF1LLMyKFakmYCbQhzDTq4&s",
        usuario: "AAA" ,
        likes: "10 likes" ,
        action: " added you as a friend",
        date: "yesterday",
        link: "https://www.google.com.br"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaCbwTQ_Zm4s8f4Ln3BF1LLMyKFakmYCbQhzDTq4&s",
        usuario: "BBB" ,
        likes: "10 likes" ,
        action: " added you as a friend",
        date: "yesterday",
        link: "https://www.google.com.br"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaCbwTQ_Zm4s8f4Ln3BF1LLMyKFakmYCbQhzDTq4&s",
        usuario: "CCC" ,
        likes: "10 likes" ,
        action: " added you as a friend",
        date: "yesterday",
        link: "https://www.google.com.br"
    }
];

export default Feed;
