export declare class Tuple {
    private readonly first;
    private readonly last;
    /**
     * The constructor of {@link Tuple} class which takes two integer inputs and initializes first and last variables
     * with given inputs.
     *
     * @param first integer input.
     * @param last  integer input.
     */
    constructor(first: number, last: number);
    /**
     * Getter for the first item at {@link Tuple}.
     *
     * @return the first item.
     */
    getFirst(): number;
    /**
     * Getter for the last item at {@link Tuple}.
     *
     * @return the last item.
     */
    getLast(): number;
}
