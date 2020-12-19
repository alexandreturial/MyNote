import styled from 'styled-components';


interface IsliderProps {
    transform: number
}

export const Container = styled.section`
    width: 100%;
    height: 100%;

    overflow: hidden;

    display: grid;
    grid-template-rows: 85% 15%;  

    grid-template-areas:
    'SD'
    'FT';
`;

export const Page = styled.div<IsliderProps>`
    grid-area: SD;

    width: 200%;
    height: 100%;

    display: flex;
    overflow: hidden;

    transition: 2s;
    transform: translateX(${props => props.transform}%);
       
`;

export const Slider = styled.div`
    width: 100%;
    height: 90%;

    display: flex;
    background: none;

    overflow-y: scroll;
    margin: 0 5px;
    
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