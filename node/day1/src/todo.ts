import type { ITask } from "./types.js";
import { v4 as uuidv4 } from "uuid"
import { readJson, writeJson } from "./utils.js";
import { addLog } from "./logs.js";

const addTask = async (title: string) => {
    const id = uuidv4()
    const newTask: ITask = {
        id: id,
        title: title,
        done: false,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
    }

    const data = await readJson<ITask>("todos.json")
    data.push(newTask)
    writeJson("todos.json", data)
    addLog("add", "new task added", id)

    console.log(data)

}

const listTasks = async (): Promise<void> => {
    const data = await readJson("todos.json")
    await addLog("list", "Task listed", null)
    data.map((task) => {
        console.log(task)
    })
}

const updateTask = async (id: string, title: string): Promise<void> => {

    const tasks = await readJson<ITask>("todos.json")
    const task = tasks.find(task => task.id == id)

    if (!task) return

    const oldTitle = task.title
    task.title = title
    task.updatedAt = new Date().toISOString()

    await writeJson<ITask>("todos.json", tasks)
    await addLog("update", `Title changed from ${oldTitle} to ${title}`, task.id)

    console.log(task)

}

const toggleTask = async (id: string): Promise<void> => {

    const tasks = await readJson<ITask>("todos.json")
    const task = tasks.find(task => task.id == id)

    if (!task) return

    const status = task.done
    task.done == false ? task.done = true : task.done = false
    task.updatedAt = new Date().toISOString()

    await writeJson("todos.json", tasks)
    await addLog("toogle", `${status ? "Toggled to incomplete task" : "Toggled to completed task"}`, task.id)

    console.log(status ? "Toggled to unfinished" : "Toggled to finished")
}

const removeTask = async (id: string) => {

    const tasks = await readJson<ITask>("todos.json")
    const updatedTasks = tasks.filter(task => task.id != id)

    await writeJson("todos.json", updatedTasks)
    await addLog("remove", `Removed Task ${id}`, id)

    console.log(`Removed task Id : ${id}`)
}

const clearTasks = async () => {
    let tasks = await readJson<ITask>("todos.json")
    const count = tasks.length

    tasks = []

    await writeJson("todos.json", tasks)
    await addLog("clear", `${count} tasks cleared`, null)

    console.log(`${count} tasks cleared`)

}





export { addTask, listTasks, updateTask, toggleTask, removeTask, clearTasks }
