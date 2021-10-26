export declare class Interval {
    private list;
    /**
     * A constructor of {@link Interval} class which creates a new {@link Array} list.
     */
    constructor();
    /**
     * The add method adds a new {@link Tuple} with given inputs to the list.
     *
     * @param start first element of {@link Tuple}.
     * @param end   second element of {@link Tuple}.
     */
    add(start: number, end: number): void;
    /**
     * The getFirst method returns the first element at the list {@link Array}'s given index.
     *
     * @param index to use at getting tuple from {@link Array}.
     * @return the first element at the list {@link Array}'s given index.
     */
    getFirst(index: number): number;
    /**
     * The getLast method returns the last element at the list {@link Array}'s given index.
     *
     * @param index to use at getting tuple from {@link Array}.
     * @return the last element at the list {@link Array}'s given index.
     */
    getLast(index: number): number;
    /**
     * The size method returns the size of the list {@link Array}.
     *
     * @return size of the list {@link Array}.
     */
    size(): number;
}
