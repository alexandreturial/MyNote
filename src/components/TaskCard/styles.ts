import styled from 'styled-components';

export const Container = styled.div`
    width: 90%;
    margin: 10px auto;

    background: ${props => props.theme.colors.white};
    padding: 15px 10px;

    border-radius: 7px;
    box-shadow: 0px 5px 3px ${props => props.theme.colors.gray}7d;

    display: flex;
    align-items: center;
    justify-content: space-between;

    cursor: pointer;
    
    ::before{
        content:'';
        width: 10px;
        height: 35px;

        position: absolute;

        background: ${props => props.theme.colors.warning};

    }

    &:hover{
        opacity: .7;
        transform: translateX(10px);
    }
`;


export const Title = styled.div`
    margin-left: 20px;

    font: 700 18px Roboto;
`;

export const BtnFinish = styled.button`
    display: flex;
   
    background: none;
    color: ${props => props.theme.colors.warning}7d;

    font: 500 18px Roboto;

    right:0;
`;  
