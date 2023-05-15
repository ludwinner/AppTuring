import {config} from '../config'

function err500(res) {
  return res.status(500).json({ message: "Something goes wrong" });
}
function err404(res) {
  return res.status(404).json({ message: "Task not found" });
}

export const getTasks = async (req, res) => {
  try {
    const tasksAll = await config.query("SELECT * FROM tasks");
    res.json(tasksAll[0]);
  } catch (error) {
    err500(res)
  }
};

export const getTask = async (req, res) => {
  try {
    const task = await config.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    if (task.length <= 0)
      err404(res)
    res.json(task[0]);
  } catch (error) {
    err500(res)
  }
};

export const saveTask = async (req, res) =>{
  try {
    const newTasks = req.body;
    console.log(newTasks,"aquitaaaaa");
    await config.query("INSERT INTO tasks set ?", [newTasks]);
    console.log("despues de awai!!!!!!!");
    res.status(201).json(newTasks);
  } catch (error) {
    err500(res)
  }
};
export const deleteTask = async (req, res) =>{
  try {
    const deleteT = await config.execute("DELETE FROM tasks WHERE id = ?",[
    req.params.id
    ]);
      if (deleteT.affectedRows <= 0) {
        err404(res)
      }
      res.sendStatus(204);
    } catch (error) {
      err500(res)
    }
  };      

export const updateTask = async (req, res) =>{
  try {
    const putUpdate = await config.query("UPDATE tasks SET ? WHERE id = ?", [
    req.body,
    req.params.id,
    ]);
    if (putUpdate.affectedRows === 0)
      err404(res)
    const taskNew = await config.query("SELECT * FROM tasks WHERE id = ?", [
      req.params.id,
    ]);
    res.json(taskNew[0]);
  } catch (error) {
    err500(res)
  }
};