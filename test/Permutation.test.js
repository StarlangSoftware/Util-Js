import * as assert from "assert";
import {Permutation} from "../Permutation";

describe('Permutation', function() {
    describe('next1', function() {
        it('Checks next method of permutation', function() {
            let permutation = new Permutation(3);
            let firstPermutation = permutation.get();
            assert.deepStrictEqual([0, 1, 2], firstPermutation);
            let count = 1;
            while (permutation.next()){
                count++;
            }
            assert.strictEqual(6, count);
        });
    });
    describe('next2', function() {
        it('Checks next method of permutation', function() {
            let permutation = new Permutation(5);
            let firstPermutation = permutation.get();
            assert.deepStrictEqual([0, 1, 2, 3, 4], firstPermutation);
            let count = 1;
            while (permutation.next()){
                count++;
            }
            assert.strictEqual(120, count);
        });
    });
});
