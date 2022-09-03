import * as assert from "assert";
import {RandomArray} from "../dist/RandomArray";

describe('RandomNormalizedArray', function() {
    describe('normalizedArrayTest', function () {
        it('normalizedArrayTest', function () {
            let array = RandomArray.normalizedArray(10);
            let sum = 0.0;
            for (var i = 0; i < 10; i++){
                sum += array[i];
            }
            assert.equal(sum, 1.0);
        });
    });
    describe('indexArrayTest', function () {
        it('indexArrayTest', function () {
            let array = RandomArray.indexArray(10, 0);
            let sum = 0;
            for (var i = 0; i < 10; i++){
                sum += array[i];
            }
            assert.equal(sum, 45);
        });
    });
});