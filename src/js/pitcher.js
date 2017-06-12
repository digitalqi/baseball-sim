import { Player } from './player.js';

export class Pitcher extends Player {
    
    /**
     * @description Pitcher constructor
     * @param {Object} playerData
     */
    constructor(playerData) {
        super(playerData);
        this._pitches = playerData.pitches;
    }

    throwPitch() {
        console.log(this._team + ' ' + this._position + ' #' + this._number  + ' ' + this._firstName + ' ' + this._lastName + ' throws a ' + this._pitches[0].pitch);
    }
}