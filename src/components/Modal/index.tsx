import React, {useState} from 'react';

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
    Form
} from './styles';

interface IModalProps{
    closemodal(): void;
};

const Modal: React.FC<IModalProps> = ({closemodal}) => {
    const [title, setTitle] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    let tasks;
    const addTask = (e) =>{
        let date = new Date();
        let value = 
            {
                Title: title, 
                Description: description,
                Data: date.getDate() +'/'+ date.getMonth() +'/'+ date.getFullYear(),
                Key: Date.now()
            }
        ;
        
        tasks = localStorage.getItem('@my-task:') ? localStorage.getItem('@my-task:') : null;
        
        if(tasks !== null){
            tasks = JSON.parse(tasks);
            tasks = [...tasks, value];
        }else{
            tasks = [value];
        }
       
        localStorage.setItem('@my-task:', JSON.stringify(tasks));
        
    };

    return (
      <Container >
        <Card>
            <BtnDelet onClick={closemodal}>
                <IoIosClose/>
            </BtnDelet>
            <Form onSubmit={addTask} >
                <Input 
                    autoFocus 
                    placeholder="Task Title"
                    onChange={e => setTitle(e.target.value)}
                />
                <Text 
                    placeholder="Task Description"
                    onChange={e => setDescription(e.target.value)} 
                />

                <BtnSubmit type="submit">
                    Save
                </BtnSubmit>
            </Form>
            
        </Card>
      </Container>
  );
}

export default Modal;