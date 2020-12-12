import styled from 'styled-components';

export const Container = styled.textarea`
    width: 100%;
    height: 100%;

    margin: 7px 0;
    padding: 10px;

    border-radius: 5px;

    color: ${props => props.theme.colors.balck};
    font: 500 15px Roboto;

    resize: none;

    ::placeholder{
        color: ${props => props.theme.colors.balck}7d;
    }
`;