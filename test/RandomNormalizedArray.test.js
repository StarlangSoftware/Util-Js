import * as assert from "assert";
import {RandomNormalizedArray} from "../RandomNormalizedArray";

describe('RandomNormalizedArray', function() {
    describe('get', function () {
        it('Checks get method of RandomNormalizedArray', function () {
            let randomNormalizedArray = new RandomNormalizedArray(10);
            let array = randomNormalizedArray.get();
            let sum = 0.0;
            for (var d in array){
                sum += d;
            }
            assert.strictEqual(1.0, sum, 0.0);
        });
    });
});