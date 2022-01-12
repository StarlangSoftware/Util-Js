export class Random {

    private seed: number = 0

    constructor(seed?: number) {
        if (seed != undefined){
            this.seed = seed
        }
    }

    private nextRandom(){
        this.seed = (1664525 * this.seed + 1013904223) % Number.MAX_SAFE_INTEGER;
    }

    nextDouble(min?: number, max?: number): number{
        this.nextRandom()
        if (min != undefined && max != undefined){
            return min + (this.seed / Number.MAX_SAFE_INTEGER) * (max - min)
        }
        return this.seed / Number.MAX_SAFE_INTEGER;
    }

    nextInt(maxRange: number): number{
        this.nextRandom()
        return this.seed % maxRange;
    }

    shuffle(array: Array<any>){
        for (let i = array.length - 1; i > 0; i--){
            let randomIndex = this.nextInt(i + 1);
            [array[i], array[randomIndex]] =
                [array[randomIndex], array[i]];
        }
    }
}