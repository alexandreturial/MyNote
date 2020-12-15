import styled from 'styled-components';

export const Container = styled.header`
    grid-area: MH;
    width: 100%;
    height: 100%;
   
    display:flex;
    flex-direction:column;
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: space-between;

    padding: 15px 15px 35px 15px;
    background: ${props => props.theme.colors.blue};
    border-radius: 0 0 30% 30%/ 0 0 15% 15%;

    button{
        font-size: 20px;
        background: none;
        color: ${props => props.theme.colors.white};
    }
`;

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: start;

    /* background: ${props => props.theme.colors.blue}; */
    border-radius: 0 0 30% 30%/ 0 0 15% 15%;
`;


export const Title = styled.h2`
    font: 700 20px Roboto;
    color: ${props => props.theme.colors.white};
`;

export const Subtitle = styled.h4`
    font: 300 15px Roboto;
    color: ${props => props.theme.colors.white};
`;
