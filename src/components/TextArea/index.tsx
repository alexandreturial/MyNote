import React, { TextareaHTMLAttributes } from 'react';

import { Container } from './styles';

type ITextProps = TextareaHTMLAttributes<HTMLTextAreaElement>;

const Input: React.FC<ITextProps> = ({ ...rest }) =>{
    return(
        <Container {...rest}/>
    );
}

export default Input;