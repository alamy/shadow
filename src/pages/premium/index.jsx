import * as React from 'react';
import FlagPremium from '../../component/flag/index';

export function Premium( ){
    return(
        <div>
            <h2>Seja Premium</h2>
            <p>Nós coletamos informações 
                que nos ajudam a entender
                que lugares combinam
                com você.</p>

                <p>
                Para isso, permita o
                rastreamento e se divirta
                turistando por Recife!</p>

                <FlagPremium name="Entrar"/>
        </div>
    );
}