import React from 'react';

import { 
    Container,
    Slider 

} from './styles';

const TesteSlider: React.FC = () => {
  return (
    <Container>
        <input type="radio" checked name="slider"className="radio1"/>
        <input type="radio"  name="slider" className="radio2"/>
        <Slider className="slide1">
            <h1>teste1</h1>
            <h1>teste2</h1>
        </Slider>
    </Container>
  );
}

export default TesteSlider;