import React from "react";

class Evento extends React.Component {
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div className="event">
                    <div class="label">
                        <img src={this.props.image} alt="imagem"/>
                    </div>
                    <div className="content">
                        <div className="summary">
                            <a className="user">
                            {this.props.usuario}
                            </a> 
                            <strong>
                                {this.props.action}
                            </strong>
                            <div className="date">
                            {this.props.date}
                            </div>
                        </div>
                        <div className="meta">
                            <a className="like" href={this.props.link}>
                            <i className="like icon"></i> {this.props.likes}
                            </a>
                        </div>
                    </div>
                </div>
        );
    }
};

export default Evento;
