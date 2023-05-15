const API = 'http:192.168.0.9:3000/tasks'

//obtener datos
export const getTasks = async () => {
    const res = await fetch(API)
    const get = await res.json()
    return [get]    
}

 export const saveTask = async (newTask) => {
    const res = await fetch (API,{
        method: "POST",
        headers: { Accept: "application/json", "Content-type": "application/json"},
        body:JSON.stringify(newTask)
    });
    return await res.json(); 
}
export const deleteTask = async (id) => {
    console.log(id);
    await fetch(`${API}/${id}`, {
    method: "DELETE",
    });
  };