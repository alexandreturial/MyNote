import React, { TextAreaHTMLAttributes } from 'react';

import { Container } from './styles';

type ITextProps = TextAreaHTMLAttributes<HTMLTextAreaElement>;

const Input: React.FC<ITextProps> = ({ ...rest }) =>{
    return(
        <Container {...rest}/>
    );
}

export default Input;