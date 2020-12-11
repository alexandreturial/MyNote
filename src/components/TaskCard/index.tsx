import React from 'react';

import {
  GoCheck
} from 'react-icons/go';

import { 
  Container,
  Title,
  BtnFinish
} from './styles';

const TaskCard: React.FC = () => {
  return (
      <Container>
          <Title>
            Task 1
          </Title>
          <BtnFinish>
            <GoCheck/>
          </BtnFinish>
      </Container>
  );
}

export default TaskCard;