import {createGlobalStyle} from 'styled-components';
import BG from '../assets/bg.png';

export const GlobalStyle = createGlobalStyle`

    :root {
        --water: #6890F0;
        --grass: #78C850;
        --electric: #F8D030;
        --psychic: #F85888;
        --ice: #B6E1DE;
        --dragon: #7038F8;
        --normal: #A8A878;
        --bug: #A8B820;
        --flying: #A890F0;
        --poison: #A040A0;
        --fighting: #C03028;
        --ground: #E0C068;
        --rock: #B8A038;
        --ghost: #705898;
        --steel: #B8B8D0;
        --fire: #F08030;
        --dark: #705848;
        --fairy: #EE99AC;
    }

    * {
        margin: 0;
        box-sizing: border-box;
        font-family: sans-serif;
    }

    body {
        background: url(${BG}) no-repeat center fixed; 
        background-size: cover;
    }
`;
