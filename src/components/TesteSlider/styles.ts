import styled from 'styled-components';

export const Container = styled.section`
    
  
    width: 100%;
    height: 100%;
    overflow: hidden;
    
    justify-content:center;
    align-items:center;

    .slide1{
       
        width: 200%;
        height: 100%;
        top:0;
        left: 0;
        transition: 1s;
        background-image: #fffddd;
    }
   
    input{
        position:relative;
        z-index:1;
    }

    input[type="radio"].radio1:checked ~ .slide1{
        transform: translateX(0);
    }
    input[type="radio"].radio2:checked  ~ .slide1{
        transform: translateX(-50%);
    }
`;


export const Slider = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
   
`;