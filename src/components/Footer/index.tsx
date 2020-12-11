import React, {useState} from 'react';
import Modal from '../Modal';

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
  
    return (
    <Container>
        <ItemNavegation>
            <GoHome/>
        </ItemNavegation>
        <ButtonNewTask onClick={clickShowModal}>
            <TiPlus/>
        </ButtonNewTask>
        <ItemNavegation>
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