import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  

  grid-template-rows: 15vh 77vh 8vh;

  grid-template-areas:
    'MH'
    'CT'
    'FT';

  height: 100vh;
  min-width: 315px;

  @media(max-width: 600px){
    min-width: 440px;
    min-height: 565px;
    grid-template-rows: 15vh 77vh 8vh;  

    grid-template-areas:
    'MH'
    'CT'
    'FT';
  }
   
`;