import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  
  grid-template-rows: 22vh 68vh 10vh;  

  grid-template-areas:
    'MH'
    'CT'
    'FT';
  

  @media(min-width: 700px){
    height: 100vh;
    width: 100vw;
    grid-template-rows: 20vh 70vh 10vh;  

    grid-template-areas:
    'MH'
    'CT'
    'FT';
  }
   
`;