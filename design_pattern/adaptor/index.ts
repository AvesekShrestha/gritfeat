import { PrinterAdaptor, OldPrinter } from "./adaptor.ts"

const adaptor: PrinterAdaptor = new PrinterAdaptor(new OldPrinter())
adaptor.print("Hello")


