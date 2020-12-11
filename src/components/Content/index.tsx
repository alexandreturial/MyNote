import React from 'react';

import {
    Container,
    TaskCount,
    TaskCountItem,
   

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

        </Container>
    );
}

export default Content;