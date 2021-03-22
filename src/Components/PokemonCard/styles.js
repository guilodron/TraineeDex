import styled from 'styled-components';

export const Container = styled.div`
    @media(max-width: 400px) {
        width: 10rem; 
    }
    width: 11.5rem;
    height: 8.5rem;
    /* border: 1px solid blue; */
    border-radius: 20px;
    position: relative;
    padding: 20px 15px;
    color: white;
    z-index: 1;
    margin: 5px;
    transition: transform 0.2s;

    &:hover{
        transform: scale(1.1);
    }


    .bg-card {
        position: absolute;
        top: 0;
        right: 0;
        z-index: -1;
    }
    
    div {
        display: flex;
        justify-content: space-around;
        div {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            strong {
                font-size: 1.1rem;
            }

            span {
                font-size: 1.1rem;

                & + span{
                    font-size: 1rem;
                    padding: 5px;
                    background-color: rgba(255, 255, 255, 0.11);
                    margin: 1px 0;
                    border-radius: 5px;
                    font-weight: 300;
                }
            }
        }
        img {
            height: 4rem;
            width: 4rem;
        }            
        
    }


`;