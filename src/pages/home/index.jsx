import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import MenuApp from '../../component/Menu';
import FlagPremium from '../../component/flag/index';
import './index.css';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

export default function Home() {
    const navegation = useNavigate();
    return (
        <ThemeProvider theme={theme}>
            <MenuApp />
            <Grid sx={{height: '77vh'}}>
            <div className='menu' id="cultural" onClick={()=>navegation('/rota')}><span>Rota <br/>Cultural</span></div>
            <div className='menu' id="parques" onClick={()=>navegation('/rota')}><span> Passeio <br/>Pelos Parques</span></div>
            <div className='menu' id="alternativa" onClick={()=>navegation('/rota')}><span>Rota <br/>Alternativa</span></div>    
                <div className='menu' id="inclusive" onClick={()=>navegation('/rota')}><span>Rota <br/>Inclusiva</span></div>
                
                
                <div className='menu' id="igrejas" onClick={()=>navegation('/rota')}><span>Rota <br/>Igrejas</span></div>
                
                <div className='menu' id="radio" onClick={()=>navegation('/rota')}><span>Rádio <br/>Recife</span></div>
            </Grid>
            <div onClick={ navegation('/premium')}>
           <FlagPremium name="Seja Premium"/>
           </div>
        </ThemeProvider>
        )

}