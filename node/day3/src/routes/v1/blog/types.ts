interface IBlog {
    id: string,
    title: string,
    content: string,
    createdAt: string
}

interface IBlogPayload {
    title: string,
    content: string,
}


export { IBlog, IBlogPayload }