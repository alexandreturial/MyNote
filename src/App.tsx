import React from 'react';

import Home from './Page/home';
import { ThemeProvider } from 'styled-components';
import light from './styles/Theme/light';

import GlocalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
     <GlocalStyles/>
     <Home/>
    </ThemeProvider>
    
  );
}

export default App;
