import * as fs from "fs";

export class FileContents {

    private readonly contents: string[]
    private filePointer: number

    constructor(fileName: string) {
        let data = fs.readFileSync(fileName, 'utf8')
        this.contents = data.split("\n")
        this.filePointer = 0
    }

    readLine(): string{
        if (this.filePointer < this.contents.length){
            let s = this.contents[this.filePointer]
            this.filePointer++
            return s
        }
        return ""
    }

    hasNextLine(): boolean{
        return this.filePointer < this.contents.length
    }
}
