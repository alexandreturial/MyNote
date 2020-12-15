import React, {useState} from 'react';

import Input from '../Input';
import Text from '../TextArea';

import {
    IoIosClose
} from 'react-icons/io';


import { addTask } from '../../Repositorie/tasks';

import { 
    Container,
    Card, 
    BtnDelet,
    BtnSubmit,
    Form
} from './styles';

interface IModalProps{
    closemodal(): void;
};

const Modal: React.FC<IModalProps> = ({closemodal}) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    
    const newTask = () =>{
        let date = new Date();
        let value = 
            {
                Title: title, 
                Description: description,
                Data: date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear(),
                Key: Date.now()
            }
        ;
        
        addTask(value);
    };

    return (
      <Container >
        <Card>
            <BtnDelet onClick={closemodal}>
                <IoIosClose/>
            </BtnDelet>
            <Form onSubmit={() => newTask()} name="newTask">
                <Input 
                    autoFocus 
                    placeholder="Task Title"
                    onChange={e => setTitle(e.target.value)}
                />
                <Text 
                    placeholder="Task Description"
                    onChange={e => setDescription(e.target.value)} 
                />

                <BtnSubmit type="submit" for="newTask">
                    Save
                </BtnSubmit>
            </Form>
            
        </Card>
      </Container>
  );
}

export default Modal;