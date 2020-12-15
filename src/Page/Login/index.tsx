import React, {useState} from 'react';

import Input from '../../components/Input';
import LogoImg from '../../styles/logo.png';

import { useAuth } from '../../Hooks/Auth';

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

    const { signIn } = useAuth();

  return (
    <Container>
        <Header>
            <h2>My Task</h2>
            <img src={LogoImg} alt=""/>
        </Header>
        <Main>
            <Form onSubmit={()=> signIn(user)}>
                <div>
                    <BiUser/>
                    <Input 
                        placeholder="nome do usuário"
                        onChange={e => setUser(e.target.value)}
                    />
                </div>
                <BtnSubmit type="submit">
                    login
                </BtnSubmit>
            </Form>
            
        </Main>
        
    </Container>
    
  );
}

export default Login;