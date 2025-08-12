export class OldPrinter {

    public printText(text: string) {
        console.log(text)
    }
}


interface Printer {
    print(message: string): void
}

export class PrinterAdaptor implements Printer {

    private oldPrinter: OldPrinter

    constructor(oldPrinter: OldPrinter) {
        this.oldPrinter = oldPrinter
    }

    public print(message: string): void {
        this.oldPrinter.printText(message)
    }
}
