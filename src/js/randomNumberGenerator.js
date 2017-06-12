export class RandomNumberGenerator {

    /**
     * @description Return random integer between the min and max inclusive
     * @param {number} min 
     * @param {number} max 
     * @return {number} Random integer between the min and max inclusive
     */
    getRandomInteger(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

}

//Singleton 
export let randomNumberGenerator = new RandomNumberGenerator();