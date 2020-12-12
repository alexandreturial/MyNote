import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
   
    position: absolute;
    top: 0;
    
    background: ${props => props.theme.colors.gray}7d;


    display: flex;
    align-items: center;
    justify-content: center;
`;


export const Card = styled.div`
    width: 70vw;
    height: 60vh;

    border-radius: 10px;

    background: ${props => props.theme.colors.white};

    padding: 20px;
`;

export const BtnDelet = styled.button`
    width: 40px;
    height: 40px;

    padding: 4px;
    border-radius: 50%;

    display:flex;

    margin: -40px auto 40px auto;
    
    background: ${props => props.theme.colors.warning};
    box-shadow: 0px 3px 4px  ${props => props.theme.colors.warning}cc;

    color: ${props => props.theme.colors.white};

    font: 900 35px Roboto;
`;

export const BtnSubmit = styled.button`
    padding: 9px 15px;
    border-radius: 25px;

    display:flex;
    align-items: flex-end;

    background-image: linear-gradient(to right, ${props => props.theme.colors.purplePrimary}, ${props => props.theme.colors.purpleSecundary});

    color: ${props => props.theme.colors.white};

    font: 900 18px Roboto;
`;

export const Content = styled.div`
    display: flex;
    flex-direction:column;

    align-items: flex-end;
`;
