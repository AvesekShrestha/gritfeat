import DocumentTemplate from "./prototype.ts";

const defaultDocument = new DocumentTemplate()
defaultDocument.setTitle("Hello World from typescript")
defaultDocument.setBody("Console.log('Hello  World!!')")
defaultDocument.setFooter("Bye")

defaultDocument.display()

const clonedDocument = defaultDocument.clone()
clonedDocument.display()




