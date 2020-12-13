import React, {useState} from 'react';

import Input from '../../components/Input';
import LogoImg from '../../styles/logo.png';



import {
    BiUser
} from 'react-icons/bi';

import { 
    Container, 
    Header, 
    Main, 
    BtnSubmit,
    Form } from './styles';

const Login: React.FC = () => {
    const [user, setUser] = useState<string>('');

    const login = () =>{
        localStorage.setItem('@my-task-login:', user);
        window.location.reload(); 
    };


  return (
    <Container>
        <Header>
            <h2>My Task</h2>
            <img src={LogoImg} alt=""/>
        </Header>
        <Main>
            <Form >
                <BiUser/>
                <Input 
                    placeholder="nome do usuário"
                    onChange={e => setUser(e.target.value)}
                />
            </Form>
            <BtnSubmit 
                onClick={login}
            >
                login
            </BtnSubmit>
        </Main>
        
    </Container>
    
  );
}

export default Login;