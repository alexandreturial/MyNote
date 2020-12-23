import React, { createContext, useState, useContext } from 'react';

import { getTasks, 
    DeletTasks, 
    addTask,
    doneTasks, 
    getDoneTasks, 
    DeletDoneTasks 
} from '../Repositorie/tasks';

interface ITask{
    value: {
        Title: string, 
        Description: string,
        Data: string,
        Key: number
    }
}

interface ITaskContext{
    task: ITask[];
    deletTask(id: number, IsdoneTask: boolean): void;
    doneTask(id: number): void;
    newTask(value: {
        Title: string, 
        Description: string,
        Data: string,
        Key: number
    }):void;
    getAllTasks(): any;
    getAllDoneTasks(): any;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);


const TaskProvider: React.FC = ({ children }) => {
    const tasks = getTasks() !== null ? getTasks() : [];
    const Donetasks = getDoneTasks() !== null ? getDoneTasks() : [];
    
    const [task, setTask] = useState(tasks);
    const [Donetask, setDonetask] = useState(Donetasks);

    const  getAllTasks = () =>{
        return task;
    }

    const  getAllDoneTasks = () =>{
        return Donetask;
    }

    const newTask = (value: {
        Title: string, 
        Description: string,
        Data: string,
        Key: number
    }) =>{
       
        addTask(value);
    };

    const deletTask = (key: number, IsdoneTask: boolean) => {
        if(IsdoneTask){
            const newTasks = DeletTasks(key)
            setTask(newTasks);
        }else{
            const newDoneTasks =  DeletDoneTasks(key)
            setDonetask(newDoneTasks);
        }
       
      }

    const doneTask = (key: number) => {
        const newTasks = doneTasks(key);
        
        setTask(newTasks[0]);
        setDonetask(newTasks[1]);
      
    }

    return (
        <TaskContext.Provider value={{task, getAllTasks, newTask, deletTask, doneTask, getAllDoneTasks}}>
            {children}
        </TaskContext.Provider>
    )
}

function useTasks(): ITaskContext{
    const context = useContext(TaskContext);

    return context;
}

export { TaskProvider, useTasks };