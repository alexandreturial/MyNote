import React from 'react';


import Routes from './Routes'


import { ThemeProvider } from 'styled-components';
import light from './styles/Theme/light';

import GlocalStyles from './styles/global';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
     <GlocalStyles/>
      <Routes/>
    </ThemeProvider>
    
  );
}

export default App;
