"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomArray = void 0;
const Random_1 = require("./Random");
class RandomArray {
    /**
     * The constructor of {@link RandomArray} class gets an integer itemCount as an input. Creates an array of
     * size itemCount and loops through each element of the array and initializes them with a random number by using Math.random().
     * Then, accumulates each element of the array and at the end divides each element with the resulting sum.
     *
     * @param itemCount integer input defining array size.
     */
    static normalizedArray(itemCount) {
        let sum = 0.0;
        let array = new Array(itemCount);
        for (let i = 0; i < itemCount; i++) {
            array[i] = Math.random();
            sum += array[i];
        }
        for (let i = 0; i < itemCount; i++) {
            array[i] /= sum;
        }
        return array;
    }
    /**
     * Creates and returns a random index array, where the indexes in the array are between 0 and itemCount - 1. For
     * example, if itemCount is 4, the method returns an array of indexes 0, 1, 2, 3 but shuffled.
     * @param itemCount Number of indexes
     * @param seed Random seed
     * @return Shuffled array containing numbers between 0 and itemCount - 1.
     */
    static indexArray(itemCount, seed) {
        let array = new Array(itemCount);
        for (let i = 0; i < itemCount; i++) {
            array[i] = i;
        }
        let random = new Random_1.Random(seed);
        random.shuffle(array);
        return array;
    }
}
exports.RandomArray = RandomArray;
//# sourceMappingURL=RandomArray.js.map