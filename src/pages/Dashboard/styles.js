import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1060px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .chosen {
        @media(max-width: 500px){
            margin: 0 auto;
        }
    }

    .pokemons {
        min-width: 12rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        height: 80vh;
        flex: 3;

        @media(max-width: 660px) {
            justify-content: center;
        }
    }

`;