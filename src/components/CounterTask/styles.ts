import styled from 'styled-components';


export const TaskCount = styled.div`
    width: 70%;
    height: 65px;
    
    display:flex;
    
    margin: -5% auto 0% auto;
    
    background: ${props => props.theme.colors.white};
    border-radius: 7px;
    box-shadow: 0px 5px 3px  ${props => props.theme.colors.gray}7d;
    
    @media(min-width: 700px){
        margin: -2% auto 0% auto;
  }
    
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