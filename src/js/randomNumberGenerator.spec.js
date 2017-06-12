import { randomNumberGenerator } from './randomNumberGenerator.js';

describe('RandomNumberGenerator', () => {

    let rng = randomNumberGenerator; 

    it('should return a random integer between 0-10', () => {  
        let num = rng.getRandomInteger(0, 10);
        expect(num).toBeGreaterThanOrEqual(0);
        expect(num).toBeLessThanOrEqual(10);
    });

});