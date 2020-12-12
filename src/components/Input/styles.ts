import styled from 'styled-components';

export const Container = styled.input`
    width: 100%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;

    color: ${props => props.theme.colors.blue};
    font: 700 25px Roboto;

    ::placeholder{
        color: ${props => props.theme.colors.blue}7d;
    }

`;