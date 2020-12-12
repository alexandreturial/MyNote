import React from 'react';

import {
  GoCheck
} from 'react-icons/go';

import { 
  Container,
  Title,
  BtnFinish
} from './styles';

interface ITaskCardProps{
  TitleTask:string;
}

const TaskCard: React.FC<ITaskCardProps> = ({TitleTask}) => {
  return (
      <Container>
          <Title>
            {TitleTask}
          </Title>
          <BtnFinish>
            <GoCheck/>
          </BtnFinish>
      </Container>
  );
}

export default TaskCard;