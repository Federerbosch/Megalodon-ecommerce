import styled from "styled-components";

export const CardContainer = styled.div`
    max-width: 400px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin: 0 auto;
`

export const HeaderCard = styled.div`
    display: flex;      
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 1.25rem;
`;

export const ItemPrice = styled.span`
    background-color: #FFB3C6;
    color: white;
    padding: 0.25rem 0.5rem;
    letter-spacing: 0.05rem;
    border-radius: 0.25rem;
    `

export const ButtonCard = styled.button`
    background-color: #FFB3C6;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover {
        background-color: #FF8A9E;
    }
    &:focus {
        outline: none;
        box-shadow: 0 0 0 2px rgba(255, 179, 198, 0.5);
    }
    font-weight: bold;
    font-size: 1rem;
    width: 100%;
    text-align: center;
`
    export const ButtonAll = styled(ButtonCard)`    
    width: auto;
    display: block;
`
