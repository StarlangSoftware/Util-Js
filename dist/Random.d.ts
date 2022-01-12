export declare class Random {
    private seed;
    constructor(seed?: number);
    private nextRandom;
    nextDouble(min?: number, max?: number): number;
    nextInt(maxRange: number): number;
}
