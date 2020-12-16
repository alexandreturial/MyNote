import React, { createContext, useState, useContext } from 'react';

import { getTasks, DeletTasks, addTask } from '../Repositorie/tasks';

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
    deletTask(id: number): void;
    newTask(value: {
        Title: string, 
        Description: string,
        Data: string,
        Key: number
    }):void;
    getAllTasks(): any;
}

const TaskContext = createContext<ITaskContext>({} as ITaskContext);


const TaskProvider: React.FC = ({ children }) => {
    const tasks = getTasks() !== null ? getTasks() : [];
    const [task, setTask] = useState(tasks);

    const  getAllTasks = () =>{
        return task;
    }

    const newTask = (value: {
        Title: string, 
        Description: string,
        Data: string,
        Key: number
    }) =>{
        console.log(getAllTasks());
       
        addTask(value);
        
    };

    const deletTask = (key: number) => {
        const newTasks = DeletTasks(key)
        setTask(newTasks);
      }

    return (
        <TaskContext.Provider value={{task, getAllTasks, newTask, deletTask}}>
            {children}
        </TaskContext.Provider>
    )
}

function useTasks(): ITaskContext{
    const context = useContext(TaskContext);

    return context;
}

export { TaskProvider, useTasks };