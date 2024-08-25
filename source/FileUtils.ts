import * as fs from "fs";

export class FileUtils {

    public static readHashMap(fileName: string){
        let result : Map<string, string> = new Map();
        let data = fs.readFileSync(fileName, 'utf8')
        let lines = data.split("\n")
        for (let line of lines){
            let list = line.split(" ")
            if (list.length == 2){
                result.set(list[0], list[1])
            }
        }
        return result
    }

}