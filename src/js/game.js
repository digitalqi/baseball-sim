import * as positions from './constants/positions.js'; 
import { randomNumberGenertor as rng } from './randomNumberGenerator.js';
import { Pitcher } from './pitcher.js';

let testPitcherData = {
    firstName: 'John',
    lastName: 'Doe',
    number: 11,
    team: 'Team A',
    position: positions.STARTING_PITCHER,
    pitches: [
        {
            pitch: 'fastball'
        }
    ]
}

let testPitcher = new Pitcher(testPitcherData);
testPitcher.throwPitch();

function pitchBall() {
    //should get control value from pitcher to determine the chance of throwing a strike
    let control = rng.getRandomInteger(0, 1);
    // testPitcher = throwPitch(control);
};