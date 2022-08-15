import { faker } from '@faker-js/faker';
import Evento from './Evento';

const Feed = () => {    
    return(
        <div className="ui feed">
            {
                eventos.map(x=>
                    (<Evento 
                        image = {x.image}
                        usuario={x.usuario} 
                        likes={x.likes} 
                        action={x.action}
                        date={x.date}
                    />)                    
                )
            }
        </div>
    );
};

const eventos = [
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaCbwTQ_Zm4s8f4Ln3BF1LLMyKFakmYCbQhzDTq4&s",
        usuario: "AAA" ,
        likes: "10 likes" ,
        action: " added you as a friend",
        date: "yesterday",
        link: "https://google.com.br"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaCbwTQ_Zm4s8f4Ln3BF1LLMyKFakmYCbQhzDTq4&s",
        usuario: "BBB" ,
        likes: "10 likes" ,
        action: " added you as a friend",
        date: "yesterday",
        link: "https://google.com.br"
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwaCbwTQ_Zm4s8f4Ln3BF1LLMyKFakmYCbQhzDTq4&s",
        usuario: "CCC" ,
        likes: "10 likes" ,
        action: " added you as a friend",
        date: "yesterday",
        link: "https://google.com.br"
    }
];

export default Feed;