import * as React from 'react';
import './flagPremium.css';

export default function FlagPremium(props) {
        return (
            <div className='premium'>
                <p>{props.name}</p>
            </div>
        );
}