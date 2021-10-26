export declare class Subset {
    protected set: Array<number>;
    private readonly rangeEnd;
    protected elementCount: number;
    /**
     * The constructor of {@link Subset} class which takes 3 integer inputs; rangeStart, rangeEnd, and elementCount.
     * It initializes variables rangeEnd and elementCount with given inputs, creates 2 arrays; set and multiset with the
     * size of given elementCount and multisetCount, which is derived from elementCount, respectively. Then, it assigns
     * rangeStart+i to each ith element of set {@link Array}.
     *
     * @param rangeStart   integer input defining start range.
     * @param rangeEnd     integer input defining ending range.
     * @param elementCount integer input element count.
     */
    constructor(rangeStart: number, rangeEnd: number, elementCount: number);
    /**
     * Getter for the set {@link Array}.
     *
     * @return the set {@link Array}.
     */
    get(): Array<number>;
    /**
     * The next method generates the next subset.
     *
     * @return true if next subset generation is possible, false otherwise.
     */
    next(): boolean;
}
