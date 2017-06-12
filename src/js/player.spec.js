import { Player } from './player.js'; 

describe('Player', () => {
    
    describe('setter and getter', () => {
        
        let player;

        beforeEach(() => {
            player = new Player({});
        });

        it('should set and get first name', () => {                
            player.firstName = 'John';
            expect(player.firstName).toBe('John');
        });

        it('should set and get last name', () => {    
            player.lastName = 'Doe';
            expect(player.lastName).toBe('Doe');
        });

        it('should set and get number', () => {    
            player.number = 1;
            expect(player.number).toBe(1);
        });

        it('should set and get team', () => {    
            player.team = 'Team A';
            expect(player.team).toBe('Team A');
        });

        it('should set and get position', () => {    
            player.position = 'SP';
            expect(player.position).toBe('SP');
        });

    });

});