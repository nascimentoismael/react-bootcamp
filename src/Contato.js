import { clear } from '@testing-library/user-event/dist/clear';
import React, {useState} from 'react';

const Contato = () => {
    const [objeto,setObjeto] = useState(
        {nome: 'Ana', email: 'ana@email.com'}
        );

    const alterarPropriedade = (propNome, propValor) => {
        let novoObjeto = {...objeto}
        novoObjeto[propNome] = propValor;
        setObjeto(novoObjeto);
    }

    return (
        <div>
            <label htmlFor="nome">Nome</label>
            <input 
                id="nome" 
                type="text" 
                value={objeto.nome}
                //onClick={(e)=>setObjeto('')}
                onChange={(e)=>{
                    alterarPropriedade(
                    e.target.id,
                    e.target.value
                    )}}
            />
            <input 
                id="email" 
                type="email" 
                value={objeto.email}
                //onClick={(e)=>setObjeto('')}
                onChange={(e)=>{
                    alterarPropriedade(
                    e.target.id,
                    e.target.value
                    )}}
            />

            <strong>{objeto.nome}</strong>
            <strong>{objeto.email}</strong>
        </div>
    );
}

export default Contato;