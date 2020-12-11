import styled from 'styled-components';

export const Container = styled.main`
    width: 100vw;
    height: 70vh;
   
    display:flex;
    flex-direction: column;
   
`;

export const TaskCount = styled.div`
    width: 85vw;
    height: 65px;

    display:flex;

    z-index: 2;
    margin: -32.5px auto 32.5px auto;
    
    background: ${props => props.theme.colors.white};
    border-radius: 7px;
    box-shadow: 0px 5px 3px  ${props => props.theme.colors.gray}7d;
    
    
`;

export const TaskCountItem = styled.div`

    display: flex;
    flex: 1;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    color: ${props => props.theme.colors.purplePrimary};

    h2{
        font: 700 18px Roboto;
    }

    h4{
        font: 300 15px Roboto;
    }
`;

export const DailyTask = styled.main`
    
`;
