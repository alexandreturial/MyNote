import React from 'react';
import { useTasks } from '../../Hooks/Tasks';

import {
  GoTrashcan,
  GoCheck
} from 'react-icons/go';

import {
  Container,
  Title,
  BtnFinish
} from './styles';

interface ITaskCardProps {
  TitleTask: string;
  index: number;
  IsdoneTask: boolean;
}

const TaskCard: React.FC<ITaskCardProps> = ({ TitleTask, index, IsdoneTask }) => {
  const { deletTask, doneTask } = useTasks();
  const del = (key: number, IsdoneTask: boolean) => {
    deletTask(key, IsdoneTask)
  }

  const done = (key: number) => {
    doneTask(key);

  }
  return (
    <Container>
      <Title>
        {TitleTask}
      </Title>
      <div>
        {
          IsdoneTask &&
          <BtnFinish ischeck={true} onClick={() => done(index)}>
            <GoCheck />
          </BtnFinish>

        }

        <BtnFinish onClick={() => del(index, IsdoneTask)} ischeck={false}>
          <GoTrashcan />
        </BtnFinish>
      </div>
    </Container>
  );
}

export default TaskCard;