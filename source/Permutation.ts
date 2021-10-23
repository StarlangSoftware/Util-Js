export class Permutation{

    private readonly a: Array<number>
    private readonly n: number

    /**
     * A constructor of {@link Permutation} class which creates a new {@link Array} and assigns integer
     * numbers starting from 0 to given input n.
     *
     * @param n integer input.
     */
    constructor(n: number) {
        this.n = n
        this.a = new Array(n);
        for (let i = 0; i < this.a.length; i++) {
            this.a[i] = i;
        }
    }

    /**
     * The get method returns the {@link Array} a.
     *
     * @return Array a.
     */
    get(): Array<number>{
        return this.a;
    }

    /**
     * The next method generates next permutation for the {@link Array} a.
     *
     * @return true if next permutation is possible, false otherwise.
     */
    next(): boolean{
        let i = this.n - 2;
        while (i >= 0 && this.a[i] >= this.a[i + 1]) {
            i--;
        }
        if (i == -1) {
            return false;
        }
        let j = this.n - 1;
        while (this.a[i] >= this.a[j]) {
            j--;
        }
        let tmp = this.a[i];
        this.a[i] = this.a[j];
        this.a[j] = tmp;
        let k = i + 1;
        j = this.n - 1;
        while (k < j) {
            tmp = this.a[k];
            this.a[k] = this.a[j];
            this.a[j] = tmp;
            k++;
            j--;
        }
        return true;
    }
}