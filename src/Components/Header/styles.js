import styled from 'styled-components';

export const Container = styled.header`
    max-width: 1060px;
    width: 100%;
    height: 6rem;
    background-color: #FE5350;
    margin: 2rem auto;
    border-radius: 10px;
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    
    @media(max-width: 880px) {
        margin-top: 0;
    }
`;