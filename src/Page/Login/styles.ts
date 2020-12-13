import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    background: ${props => props.theme.colors.blue};
    
    display: grid;
    grid-template-rows: 1fr 3fr;  
    grid-template-areas:
        'MH'
        'CT';
        


`;

export const Header = styled.header`
    grid-area: MH;
    background: ${props => props.theme.colors.blue};
    color: ${props => props.theme.colors.white};
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    h2{
        font: 700 38px Roboto;
        text-align: center;
    
        margin-top: 25px;
    }
    img{
        position: absolute;
        top: 5%;
        width: 300px;
        height: 300px;
    }
    
`;

export const Form = styled.form`
    display: flex;
    
    align-items: baseline;
    justify-content: center;

    width: 100%;
    
    margin-top: 50%;

    @media(min-width: 700px){
        margin-top: 20%;
    }

    input{
        border-bottom: 1px solid ${props => props.theme.colors.blue};
        font-size: 16px;
        width: 40%;
    }
`;

export const Main = styled.main`
    grid-area: CT;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    

    color: ${props => props.theme.colors.blue};        
    background: ${props => props.theme.colors.white};
    border-radius:  60% 60% 0 0/ 25% 25% 0 0;

    
    
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

