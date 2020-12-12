import styled from 'styled-components';

export const Container = styled.header`
    width: 100vw;
    height: 20vh;
   
    display:flex;

    background: ${props => props.theme.colors.blue};
    border-radius: 0 0 30% 30%/ 0 0 15% 15%;

`;
export const Section = styled.section`
    position: relative;
    

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    padding: 15px;

`;


export const Title = styled.h2`
    font: 700 20px Roboto;
    color: ${props => props.theme.colors.white};
`;

export const Subtitle = styled.h4`
    font: 300 15px Roboto;
    color: ${props => props.theme.colors.white};
`;
