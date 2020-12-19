import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: grid;
  
  grid-template-rows: 22vh 78vh;  

  grid-template-areas:
    'MH'
    'CT';
  

  @media(min-width: 700px){
    height: 100vh;
    width: 100vw;
    grid-template-rows: 20vh 80vh;  

    grid-template-areas:
    'MH'
    'CT';
  }
   
`;