import styled from 'styled-components';

export const Container = styled.header`
    width: 100vw;
    height: 20vh;
   
    display:flex;
   
    ::before{
        content:'';
        position: absolute;
        top:0;
        left:0;
        width: 100vw;
        height: 20vh;

        background: ${props => props.theme.colors.blue};
        border-radius: 0 0 30% 30%/ 0 0 15% 15%;
       // transform: scalex(1.5);
       
    }
`;
export const Section = styled.section`
    position: relative;
    z-index: 1;

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
