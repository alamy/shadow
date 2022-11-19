import * as React from 'react';
import FlagPremium from '../../component/flag/index';


export default function Info(){

    const conteudo = {
        title: "Do sei Jeito",
        text: "Nós coletamos informações que nos ajudam a entender que lugares combinam com você",
        subtitle: "Para isso, permita o rasteamento e se divirta turistando por Recife!"
    }
    return(
        <div>
            <h2>{conteudo.title}</h2>
            <h4>{conteudo.text}</h4>
            <h4>{conteudo.subtitle}</h4>
            <FlagPremium name="Permetir"/>
        </div>
    )
}