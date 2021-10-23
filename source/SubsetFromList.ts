import {Subset} from "./Subset";

export class SubsetFromList extends Subset{

    private readonly elementList: Array<number>;
    private readonly indexList: Array<number>;

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
    constructor(list: Array<number>, elementCount: number) {
        super(0, 0, 0)
        this.elementList = list;
        this.elementCount = elementCount;
        this.set = new Array(elementCount);
        this.indexList = new Array(elementCount);
        for (let i = 0; i < elementCount; i++) {
            this.indexList[i] = i;
            this.set[i] = this.elementList[this.indexList[i]];
        }
    }

    /**
     * The next method generates the next subset from list.
     *
     * @return true if next subset generation from list is possible, false otherwise.
     */
    next(): boolean {
        let i;
        for (i = this.elementCount - 1; i > -1; i--) {
            this.indexList[i]++;
            if (this.indexList[i] < this.elementList.length - this.elementCount + i + 1)
                break;
        }
        if (i == -1)
            return false;
        this.set[i] = this.elementList[this.indexList[i]];
        for (let j = i + 1; j < this.elementCount; j++) {
            this.indexList[j] = this.indexList[j - 1] + 1;
            this.set[j] = this.elementList[this.indexList[j]];
        }
        return true;
    }

}