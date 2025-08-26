import { readJson, writeJson } from "./utils.js";
import type { ILog, ITask } from "./types.js";
import { v4 as uuidv4 } from "uuid"

const addLog = async (action: ILog["action"], details: string, taskId: string | null): Promise<void> => {

    const newLog: ILog = {
        id: uuidv4(),
        action: action,
        details: details,
        taskId: taskId,
        timestamp: new Date().toISOString()
    }

    const logs = await readJson<ILog>("logs.json")
    logs.push(newLog)
    await writeJson("logs.json", logs)
}

const viewLogs = async () => {
    const logs = await readJson<ILog>("logs.json")
    logs.map((log) => {
        console.log(log)
    })

}

export { addLog, viewLogs }