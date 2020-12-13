import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 100%; 

  grid-template-rows: 15vh 77vh 8vh;

  grid-template-areas:
    'MH'
    'CT'
    'FT';

  height: 100vh;
  min-width: 315px;

  @media(max-width: 600px){
    grid-template-columns: 100%; 
    grid-template-rows: 15vh 77vh 8vh;  

    grid-template-areas:
    'MH'
    'CT'
    'FT';
  }
   
`;