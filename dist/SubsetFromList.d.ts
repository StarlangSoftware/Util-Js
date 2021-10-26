import { Subset } from "./Subset";
export declare class SubsetFromList extends Subset {
    private readonly elementList;
    private readonly indexList;
    /**
     * A constructor of {@link SubsetFromList} class takes an integer list and an integer elementCount as inputs. It initializes
     * elementList and elementCount variables with given inputs, then creates 3 arrays; set,indexList, and multiset with the
     * size of given elementCount and multisetCount, which is derived from elementCount, respectively. Then, it assigns
     * i to each ith element of indexList {@link Array} and use this index to point at elementList and
     * assigns to set {@link Array}.
     *
     * @param list         {@link java.lang.reflect.Array} type input.
     * @param elementCount integer input element count.
     */
    constructor(list: Array<number>, elementCount: number);
    /**
     * The next method generates the next subset from list.
     *
     * @return true if next subset generation from list is possible, false otherwise.
     */
    next(): boolean;
}
