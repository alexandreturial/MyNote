export const getTasks = () => {
    let tasks = localStorage.getItem('@my-task:') !== null ? localStorage.getItem('@my-task:') : null;

    const data = tasks !== null ? JSON.parse(tasks) : null;

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


export const addTask = (value) => {
    let tasks = getTasks();
   
    if (tasks !== null) {
       
        tasks = [...tasks, value];
       
    } else {
        tasks = [value];
    }
   
    localStorage.setItem('@my-task:', JSON.stringify(tasks));
}