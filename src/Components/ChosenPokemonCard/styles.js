import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    width: 19rem;
    /* height: 60vh; */
    background-color: white;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
    padding: 0 4rem;

    strong {
        font-size: 1.1rem;
        color: #646464;
        margin: 0.8rem 0;
    }

    img {
        width: 9.7rem;
        height: 9.7rem;
        margin-top: -55px;
    }

    .types {
        span{
            font-size: 1rem;
            padding: 5px;
            margin: 1px 0;
            border-radius: 5px;
            font-weight: 300;
        }
    }

    .stat {
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
`;