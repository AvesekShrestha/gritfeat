import type { ILog, ITask } from "./types.js";
import fs from "fs/promises"

const readJson = async<T>(file: string): Promise<T[]> => {
    try {
        const data = await fs.readFile(`${process.env.FILE_DIR}/${file}`, "utf-8")
        return JSON.parse(data) as T[]

    } catch (error) {
        return []
    }
}

const writeJson = async<T>(file: string, data: T[]): Promise<void> => {
    await fs.writeFile(`${process.env.FILE_DIR}/${file}`, JSON.stringify(data), "utf-8")
}



export { readJson, writeJson }