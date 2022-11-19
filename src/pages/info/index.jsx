import * as React from 'react';
import './estilo.css';
import { useNavigate } from 'react-router-dom';


export default function Info(){

    const navegation = useNavigate();
    const conteudo = {
        title: "Do seu Jeito",
        text: "Nós coletamos informações que nos ajudam a entender que lugares combinam com você",
        subtitle: "Para isso, permita o rasteamento e se divirta turistando por Recife!"
    }
    return(
        <div className='info'>
            <h2>{conteudo.title}</h2>
            <p>{conteudo.text}</p>
            <p>{conteudo.subtitle}</p>
            <div onClick={navegation('/home')} className='premium' >
                <p>Entrar</p>
            </div>
        </div>
    )
}