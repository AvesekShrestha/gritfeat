interface ITask {
    id: string,
    title: string,
    done: boolean,
    createdAt: string,
    updatedAt: string
}

type Action = "add" | "update" | "toogle" | "remove" | "clear" | "list"

interface ILog {
    id: string,
    action: Action,
    taskId: string | null,
    details: string
    timestamp: string,
}


export type { ITask, ILog }