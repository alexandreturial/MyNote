export const getTasks = () => {
    let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : null;

    const data = tasks !== null ? JSON.parse(tasks) : null;

    return data;
}

export const getDoneTasks = () => {
    let Donetasks = localStorage.getItem('@my-done-task:') !== null ? localStorage.getItem('@my-done-task:') : null;

    const data = Donetasks !== null ? JSON.parse(Donetasks) : null;

    return data;
}

export const DeletTasks = (key) => {
    const data = getTasks();
    let filter = data.filter(item => {
        return item.Key !== key
    });
    localStorage.setItem('@my-task:', JSON.stringify(filter));

    return filter;
}

export const DeletDoneTasks = (key) => {
    const data = getDoneTasks();
    let filter = data.filter(item => {
        return item.Key !== key
    });
    localStorage.setItem('@my-done-task:', JSON.stringify(filter));

    return filter;
}


export const doneTasks = (key) => {
    const data = getTasks();
    
    let filter = data.filter(item => {
        return item.Key !== key
    });

    let DoneTask = data.filter(item => {
        return item.Key === key
    });

    localStorage.setItem('@my-task:', JSON.stringify(filter));
    const DonesTasks = addDoneTasks(DoneTask);
   

    return  [filter, DonesTasks];
}

export const addTask = (value) => {
    let tasks = getTasks();
   
    if (tasks !== null) {
       
        tasks = [...tasks, value];
       
    } else {
        tasks = [value];
    }
   
    localStorage.setItem('@my-task:', JSON.stringify(tasks));
    
}

const addDoneTasks = (task) => {
    let Donetasks = getDoneTasks();
   
    if (Donetasks !== null) {
       
        Donetasks = [...Donetasks, ...task];
       
    } else {
        Donetasks = task;
    }
    
    localStorage.setItem('@my-done-task:', JSON.stringify(Donetasks));
    return getDoneTasks();
}