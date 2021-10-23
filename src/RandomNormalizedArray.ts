class RandomNormalizedArray {

    private array: Array<number>;

    /**
     * The constructor of {@link RandomNormalizedArray} class gets an integer itemCount as an input. Creates an array of
     * size itemCount and loops through each element of the array and initializes them with a random number by using Math.random().
     * Then, accumulates each element of the array and at the end divides each element with the resulting sum.
     *
     * @param itemCount integer input defining array size.
     */
    constructor(itemCount: number) {
        let sum = 0.0;
        this.array = new Array(itemCount);
        for (let i = 0; i < itemCount; i++) {
            this.array[i] = Math.random();
            sum += this.array[i];
        }
        for (let i = 0; i < itemCount; i++) {
            this.array[i] /= sum;
        }
    }

    /**
     * Getter for the double {@link Array}.
     *
     * @return the double {@link Array}.
     */
    get(): Array<number>{
        return this.array;
    }

}