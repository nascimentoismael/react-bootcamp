import { render } from '@testing-library/react';
import React, {useEffect, useState} from 'react';
import Evento from './Evento';
import axios from 'axios';

const Feed = () => {
    const [state,setState] = useState({carregando:true,eventos: [], msgErro: '' });
    
    const Atualizar = () =>{
        axios.get('https://localhost:3000/feeds')
        .then(resp =>{
            setState(
                {carregando:false, eventos:resp.data, msgErro: ''}
            )
        }).catch(erro => {
            setState({carregando:false, eventos:[], msgErro: erro.message})
        });;
    }

    useEffect(()=>Atualizar());

    if(state.carregando){
        return <div>Carregando...</div>;
    }else{
        const componentesEventos = state.eventos.map(x =>
            (
                <Evento
                key={x.id}
                objeto={x}
                atualizar={Atualizar}
                />
            )
        );

        const msgErro = state.msgErro ?
        (<div className='ui red message'>
            {state.msgErro}
        </div>) : null;

        return (
            <div className='ui feed'>
                {msgErro}
                {componentesEventos}
            </div>
        )
    }
}


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
