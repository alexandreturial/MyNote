import React from 'react';

import CardTask from '../TaskCard';

import {
    Container,
    TaskCount,
    TaskCountItem,
    DailyTask

} from './styles';

const Content: React.FC = () => {
    return (
        <Container>
            <TaskCount>
                <TaskCountItem>
                    <h2>
                        0
                    </h2>
                    <h4>
                        task
                    </h4>
                </TaskCountItem>
                <TaskCountItem>
                    <h2>
                        10
                    </h2>
                    <h4>
                        finish
                    </h4>
                </TaskCountItem>
                <TaskCountItem>
                    <h2>
                        0
                    </h2>
                    <h4>
                        daily
                    </h4>
                </TaskCountItem>
            </TaskCount>
            <DailyTask>
                <CardTask/>
                <CardTask/>
                <CardTask/>
                <CardTask/>
            </DailyTask>
        </Container>
    );
}

export default Content;