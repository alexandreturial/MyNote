import styled from 'styled-components';

export const Container = styled.footer`
    width: 100vw;
    height: 10vh;
   
    display:flex;
    align-items: end;
    justify-content: space-between;

    background: ${props => props.theme.colors.white};

    box-shadow: 0px -3px 4px  ${props => props.theme.colors.gray}7d;
`;

export const  ItemNavegation = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;

    padding: 15px 30px;
    color: ${props => props.theme.colors.blue}7d; 
    font: 900 35px Roboto;

    cursor: pointer;

    :hover{
        color: ${props => props.theme.colors.blue}; 
    }
`;

export const  ButtonNewTask = styled.button`
    display:flex;
    
    margin-top: -25px;
    padding: 8px;

    border-radius: 50%;

    background-image: linear-gradient(${props => props.theme.colors.purplePrimary}, ${props => props.theme.colors.purpleSecundary});
    box-shadow: 0px 3px 4px  ${props => props.theme.colors.purplePrimary}7d,
                0px 5px 7px ${props => props.theme.colors.purpleSecundary};

    color: ${props => props.theme.colors.white};

    font: 900 40px Roboto;
`; 
