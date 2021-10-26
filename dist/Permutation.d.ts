export declare class Permutation {
    private readonly a;
    private readonly n;
    /**
     * A constructor of {@link Permutation} class which creates a new {@link Array} and assigns integer
     * numbers starting from 0 to given input n.
     *
     * @param n integer input.
     */
    constructor(n: number);
    /**
     * The get method returns the {@link Array} a.
     *
     * @return Array a.
     */
    get(): Array<number>;
    /**
     * The next method generates next permutation for the {@link Array} a.
     *
     * @return true if next permutation is possible, false otherwise.
     */
    next(): boolean;
}
