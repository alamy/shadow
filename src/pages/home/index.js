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
                <div className='menu' id="inclusive" onClick={()=>navegation('/inclusivo')}><span>Rota <br/>Inclusiva</span></div>
                <div className='menu' id="cultural"><span>Cultural</span></div>
                <div className='menu' id="parques"><span>Parques</span></div>
                <div className='menu' id="igrejas"><span>Igrejas</span></div>
                <div className='menu' id="alternativa"><span>Alternativa</span></div>
            </Grid>
   
           <FlagPremium />
        </ThemeProvider>
        )

}