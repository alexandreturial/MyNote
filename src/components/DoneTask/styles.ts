import styled from 'styled-components';

export const DailyTask = styled.div`
    width: 100%;
`;

export const Img = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: center;

    color: ${props => props.theme.colors.purplePrimary}7d;
    span{
        font: 300 28px Roboto;
    }

    
`;