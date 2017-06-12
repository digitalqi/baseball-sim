/**
 * @name Player
 * @description Base class for baseball players
 * @author Qi Ming He
 */
export class Player {

    /**
     * @description Player constructor
     * @param {Object} playerData
     */
    constructor(playerData) {
        this._firstName = playerData.firstName;
        this._lastName = playerData.lastName;
        this._number = playerData.number;
        this._team = playerData.team;
        this._position = playerData.position;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    get number() {
        return this._number;
    }

    get team() {
        return this._team;
    }
    
    get position() {
        return this._position;
    }

    set firstName(newFirstName) {
        this._firstName = newFirstName;
    }

    set lastName(newLastName) {
        this._lastName = newLastName;
    }

    set number(newNumber) {
        this._number = newNumber;
    }

    set team(newTeam) {
        this._team = newTeam;
    }

    set position(newPosition) {
        this._position = newPosition;
    }

}