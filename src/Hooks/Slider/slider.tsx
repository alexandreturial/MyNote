import React, { createContext, useState, useContext } from 'react';
import Footer from '../../components/Footer';

import {
    Container,
    Slider,
    Page

} from './styles';

interface ISliderContext {
    move: number;
    showDailyTask(transform: number): void;
    showCompleteTask(transform: number): void;
}

const SliderContext = createContext<ISliderContext>({} as ISliderContext);


const SilderProvider: React.FC = ({ children }) => {
    const [move, setMove] = useState<number>(0);

    const showDailyTask = (transform: number) => {
        
        setMove(transform);
    }

    const showCompleteTask = (transform: number) =>{
        setMove(transform);
    }
    
    return (
        <SliderContext.Provider value={{move, showDailyTask, showCompleteTask}}>
            <Container>
                <Page  transform={move}>
                    {
                        React.Children.map(children, Child => {
                            return(
                                <Slider>
                                    {Child}
                                </Slider>
                            )
                        })
                    }
                </Page>
                <Footer/>
            </Container>
        </SliderContext.Provider>
    )
}

function useSlider(): ISliderContext {
    const context = useContext(SliderContext);

    return context;
}

export { SilderProvider, useSlider };