import * as positions from './constants/positions.js'; 
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