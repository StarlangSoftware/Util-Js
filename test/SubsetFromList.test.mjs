import * as assert from "assert";
import {SubsetFromList} from "../src/SubsetFromList";

describe('SubsetFromList', function() {
    describe('next1', function() {
        it('Checks next method of subsetFromList', function() {
            let subSet = new SubsetFromList([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 5);
            let firstSubSet = subSet.get();
            assert.deepStrictEqual([10, 20, 30, 40, 50], firstSubSet);
            let count = 1;
            while (subSet.next()){
                count++;
            }
            assert.strictEqual(252, count);
        });
    });
    describe('next2', function() {
        it('Checks next method of subsetFromList', function() {
            let subSet = new SubsetFromList([9, 8, 2, 12, 7, 16, 17], 3);
            let firstSubSet = subSet.get();
            assert.deepStrictEqual([9, 8, 2], firstSubSet);
            let count = 1;
            while (subSet.next()){
                count++;
            }
            assert.strictEqual(35, count);
        });
    });
    describe('next3', function() {
        it('Checks next method of subsetFromList', function() {
            let count = 0;
            for (var i = 0; i <= 9; i++){
                let subSet = new SubsetFromList([9, 8, 2, 12, 7, 16, 17, 8, 3], i);
                count++;
                while (subSet.next()){
                    count++;
                }
            }
            assertEquals(512, count);
        });
    });
});
