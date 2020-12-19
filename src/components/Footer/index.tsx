import React, {useState} from 'react';
import Modal from '../Modal';
import { useSlider } from '../../Hooks/Slider/slider';

import { 
    Container,
    ItemNavegation,
    ButtonNewTask 

} from './styles';

import {
    TiPlus
} from 'react-icons/ti';

import {
    GoHome,
    GoTasklist
} from 'react-icons/go';

const Footer: React.FC = () => {
    const [showModal, setShowModal] = useState(false);
    
    const clickShowModal = () =>{
        setShowModal(!showModal);
        
        
    }
    const showTaskDaily = () =>{
        
        showDailyTask(0);
        
        
    }
    const showTaskComplete = () =>{
        
        showCompleteTask(-50);
        
        
    }

    const { showDailyTask, showCompleteTask } = useSlider();
    return (
    <Container>
        <ItemNavegation onClick={showTaskDaily}>
            <GoHome/>
        </ItemNavegation>
        <ButtonNewTask onClick={clickShowModal}>
            <TiPlus/>
        </ButtonNewTask>
        <ItemNavegation onClick={showTaskComplete}>
            <GoTasklist/>
        </ItemNavegation>
        {
            showModal !== false &&
                <Modal closemodal={clickShowModal}>
                    teste
                </Modal>
        }
       
    </Container>
  );
}

export default Footer;