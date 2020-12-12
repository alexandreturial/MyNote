import React from 'react';

import Input from '../Input';
import Text from '../TextArea';

import {
    IoIosClose
} from 'react-icons/io';


import { 
    Container,
    Card, 
    BtnDelet,
    BtnSubmit,
    Content
} from './styles';

interface IModalProps{
    closemodal(): void;
};

const Modal: React.FC<IModalProps> = ({closemodal}) => {
  return (
      <Container >
        <Card>
            <BtnDelet onClick={closemodal}>
                <IoIosClose/>
            </BtnDelet>
            <Content>
                <Input autoFocus placeholder="Task Title"/>
                <Text placeholder="Task Description" rows={10}/>

                <BtnSubmit>
                    Save
                </BtnSubmit>
            </Content>
            
        </Card>
      </Container>
  );
}

export default Modal;