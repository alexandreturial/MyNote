import React from 'react';

import {
  GoTrashcan
} from 'react-icons/go';

import { 
  Container,
  Title,
  BtnFinish
} from './styles';

interface ITaskCardProps{
  TitleTask:string;
  index: number;
  delet(number):void;
}

const TaskCard: React.FC<ITaskCardProps> = ({TitleTask, index, delet}) => {
  const del = (key: number) => {
    delet(key)
  }
  
  return (
      <Container>
          <Title>
            {TitleTask}
          </Title>
          <BtnFinish onClick={() => del(index)}>
            <GoTrashcan/>
          </BtnFinish>
      </Container>
  );
}

export default TaskCard;