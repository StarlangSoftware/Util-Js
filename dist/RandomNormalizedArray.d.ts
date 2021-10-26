export declare class RandomNormalizedArray {
    private readonly array;
    /**
     * The constructor of {@link RandomNormalizedArray} class gets an integer itemCount as an input. Creates an array of
     * size itemCount and loops through each element of the array and initializes them with a random number by using Math.random().
     * Then, accumulates each element of the array and at the end divides each element with the resulting sum.
     *
     * @param itemCount integer input defining array size.
     */
    constructor(itemCount: number);
    /**
     * Getter for the double {@link Array}.
     *
     * @return the double {@link Array}.
     */
    get(): Array<number>;
}
