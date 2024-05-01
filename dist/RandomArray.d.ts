export declare class RandomArray {
    /**
     * The constructor of {@link RandomArray} class gets an integer itemCount as an input. Creates an array of
     * size itemCount and loops through each element of the array and initializes them with a random number by using Math.random().
     * Then, accumulates each element of the array and at the end divides each element with the resulting sum.
     *
     * @param itemCount integer input defining array size.
     */
    static normalizedArray(itemCount: number): Array<number>;
    /**
     * Creates and returns a random index array, where the indexes in the array are between 0 and itemCount - 1. For
     * example, if itemCount is 4, the method returns an array of indexes 0, 1, 2, 3 but shuffled.
     * @param itemCount Number of indexes
     * @param seed Random seed
     * @return Shuffled array containing numbers between 0 and itemCount - 1.
     */
    static indexArray(itemCount: number, seed: number): Array<number>;
}
