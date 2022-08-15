import { faker } from '@faker-js/faker';

const Evento = (props) => {
    console.log(props);
    
    return(
        <div className="event">
                <div class="label">
                    <img src={props.image}/>
                </div>
                <div className="content">
                    <div className="summary">
                        <a className="user">
                        {props.usuario}
                        </a> 
                        <strong>
                            {props.action}
                        </strong>
                        <div className="date">
                        {props.date}
                        </div>
                    </div>
                    <div className="meta">
                        <a className="like">
                        <i className="like icon"></i> {props.likes}
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default Evento;