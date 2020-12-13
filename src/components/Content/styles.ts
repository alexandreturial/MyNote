import styled from 'styled-components';

export const Container = styled.main`
    grid-area: CT;
    width: 100%;
    height: 100%;
   
    display:flex;
    flex-direction: column;

    overflow-y: scroll;
    
    ::-webkit-scrollbar{
        width: 10px;
    }
    ::-webkit-scrollbar-thumb{
        background-color: ${props => props.theme.colors.tertiary};
        border-radius: 10px;
    }
    ::-webkit-scrollbar-track{
        background-color:${props => props.theme.colors.primary};
        
    }
`;


