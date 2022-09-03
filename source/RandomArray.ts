import {Random} from "./Random";

export class RandomArray {

    /**
     * The constructor of {@link RandomArray} class gets an integer itemCount as an input. Creates an array of
     * size itemCount and loops through each element of the array and initializes them with a random number by using Math.random().
     * Then, accumulates each element of the array and at the end divides each element with the resulting sum.
     *
     * @param itemCount integer input defining array size.
     */
    static normalizedArray(itemCount: number) : Array<number>{
        let sum = 0.0;
        let array = new Array(itemCount);
        for (let i = 0; i < itemCount; i++) {
            array[i] = Math.random();
            sum += array[i];
        }
        for (let i = 0; i < itemCount; i++) {
            array[i] /= sum;
        }
        return array
    }

    static indexArray(itemCount: number, seed: number): Array<number>{
        let array = new Array(itemCount);
        for (let i = 0; i < itemCount; i++){
            array[i] = i;
        }
        let random = new Random(seed)
        random.shuffle(array)
        return array
    }

}