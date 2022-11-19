import * as React from 'react';
import FlagPremium from '../../component/flag/index';
import { useNavigate } from 'react-router-dom';
import './estilo.css';

export default function Premium( ){
    const conteudo = {
        titulo: "Seja Premium",
        texto1: "Nós coletamos informações que nos ajudam a entender que lugares combinam com você.",
        texto2: "Para isso, permita o rastreamento e se divirta turistando por Recife!",
    }
    const navegation = useNavigate();
    return(
        <div className='premi'>
            <h2>{conteudo.titulo}</h2>
            <p>{conteudo.texto1}</p>
            <p>{conteudo.texto2}</p>
             
            <div className='premium' onClick={ navegation('/home')}>
                <p>Entrar</p>
            </div>
            
        </div>
    );
}