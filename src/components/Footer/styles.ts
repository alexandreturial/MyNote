import styled from 'styled-components';

export const Container = styled.footer`
    
    grid-area: FT;
    width: 100%;
    height: 100%;

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

    padding: 15px 40px; 
    
    color: ${props => props.theme.colors.blue}7d; 
    font: 900 30px Roboto;

    cursor: pointer;

    :hover{
        color: ${props => props.theme.colors.blue}; 
    }
`;

export const  ButtonNewTask = styled.button`
    display:flex;
    
    margin-top: -25px;
    padding: 8px;
    z-index:2;
    border-radius: 50%;

    background-image: linear-gradient(${props => props.theme.colors.purplePrimary}, ${props => props.theme.colors.purpleSecundary});
    box-shadow: 0px 3px 4px  ${props => props.theme.colors.purplePrimary}7d,
                0px 5px 7px ${props => props.theme.colors.purpleSecundary};

    color: ${props => props.theme.colors.white};

    font: 900 40px Roboto;
`; 
