export class Tuple {

    private readonly first: number;
    private readonly last: number;

    /**
     * The constructor of {@link Tuple} class which takes two integer inputs and initializes first and last variables
     * with given inputs.
     *
     * @param first integer input.
     * @param last  integer input.
     */
    constructor(first: number, last: number) {
        this.first = first;
        this.last = last;
    }

    /**
     * Getter for the first item at {@link Tuple}.
     *
     * @return the first item.
     */
    getFirst(): number{
        return this.first;
    }

    /**
     * Getter for the last item at {@link Tuple}.
     *
     * @return the last item.
     */
    getLast(): number{
        return this.last;
    }
}