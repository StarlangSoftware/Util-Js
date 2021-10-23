import * as assert from "assert";
import {Subset} from "../Subset";

describe('Subset', function() {
    describe('next1', function() {
        it('Checks next method of subset', function() {
            let subSet = new Subset(1, 10, 5);
            let firstSubSet = subSet.get();
            assert.deepStrictEqual([1, 2, 3, 4, 5], firstSubSet);
            let count = 1;
            while (subSet.next()){
                count++;
            }
            assert.strictEqual(252, count);
        });
    });
    describe('next2', function() {
        it('Checks next method of subset', function() {
            let subSet = new Subset(1, 20, 3);
            let firstSubSet = subSet.get();
            assert.deepStrictEqual([1, 2, 3], firstSubSet);
            let count = 1;
            while (subSet.next()){
                count++;
            }
            assert.strictEqual(1140, count);
        });
    });
    describe('next3', function() {
        it('Checks next method of subset', function() {
            let count = 0;
            for (var i = 0; i <= 10; i++){
                let subSet = new Subset(1, 10, i);
                count++;
                while (subSet.next()){
                    count++;
                }
            }
            assert.strictEqual(1024, count);
        });
    });
});
