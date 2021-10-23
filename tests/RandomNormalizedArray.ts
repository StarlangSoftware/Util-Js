import * as assert from "assert";
import {RandomNormalizedArray} from "../dist/RandomNormalizedArray";

describe('RandomNormalizedArray', function() {
    describe('get', function () {
        it('Checks get method of RandomNormalizedArray', function () {
            let randomNormalizedArray = new RandomNormalizedArray(10);
            let array = randomNormalizedArray.get();
            let sum = 0.0;
            for (var i = 0; i < 10; i++){
                sum += array[i];
            }
            assert.equal(sum, 1.0);
        });
    });
});