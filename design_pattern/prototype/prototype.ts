class DocumentTemplate {
    public title: string
    public body: string
    public footer: string

    constructor(templete?: DocumentTemplate) {
        if (templete) {

            this.title = templete.title
            this.body = templete.body
            this.footer = templete.footer
        }
        else {
            this.title = "Random Title"
            this.body = "Random Body"
            this.footer = "Random Footer"
        }
    }

    public setTitle(title: string) {
        this.title = title
    }

    public setBody(body: string) {
        this.body = body
    }

    public setFooter(footer: string) {
        this.footer = footer
    }

    public clone(): DocumentTemplate {
        return new DocumentTemplate(this)
    }

    public display(): void {
        console.log(this.title)
        console.log(this.body)
        console.log(this.footer)
    }
}


export default DocumentTemplate
