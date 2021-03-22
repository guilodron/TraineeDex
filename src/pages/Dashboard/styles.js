import styled from 'styled-components';

export const Container = styled.section`
    max-width: 1060px;
    width: 100%;
    margin: 0 auto;
    /* border: 1px solid black; */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media(max-width: 660px) {
        justify-content: center;
    }

`;