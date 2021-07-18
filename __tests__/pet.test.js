 const Pet = require('../src/pet');

 describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
      });
      it('sets the name property', () => {
        const pet = new Pet('Fido');
    
        expect(pet.name).toEqual('Fido');
      });
      it('has a initial age of 0', () => {
        const pet = new Pet('Fido');
    
        expect(pet.age).toEqual(0);
      });
      it('has a initial age of 0', () => {
        const pet = new Pet('Fido'); 
        expect(pet.age).toEqual(0);
      });
   });

 describe('growUp', () => { 
      it('increases the hunger of the pet by 5, each time it grows up', () => {
        const pet = new Pet('Fido');
        pet.growUp();
        expect(pet.hunger).toEqual(5);
      });
      it('decreases the fitness of the pet by 3, each time it grows up', () => {
        const pet = new Pet('Fido');
        pet.growUp()
        expect(pet.fitness).toEqual(7);
      });
 });

 describe('walk', () => {
    it('increases fitness by 4', () => {
    const pet = new Pet('fido');

    pet.fitness = 4;
    pet.walk();

    expect(pet.fitness).toEqual(8);
    });
    it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('fido');

    pet.fitness = 8;
    pet.walk();

    expect(pet.fitness).toEqual(10);
    });
});

  describe('feed', () => {
    it('reduces hunger by 3', () => {
      const pet = new Pet('fido');

      pet.hunger = 4;
      pet.feed();
    
      expect(pet.hunger).toEqual(1);
    })
    it('reduces hunger to a minimum of 0', () => {
      const pet = new Pet('fido');

      pet.hunger = 2;
      pet.feed();
    
      expect(pet.hunger).toEqual(0);
    })

    it('throws an error if the pet is not alive', () => {
      const pet = new Pet('Fido');

      pet.age = 30;

      expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    });
  });

  describe('checkUp', () => {
    it('returns "I am hungry AND I need a walk" if fitness is less than equal to or less than 3 and hunger is equal to or greater than 5', () => {
      const pet = new Pet('Fido');

      pet.hunger = 8;
      pet.fitness = 1;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I am hungry AND I need a walk')
    })
    it('returns "I feel great!" if fitness is greater than 3 and hunger is less than 5', () => {
      const pet = new Pet('Fido');

      pet.hunger = 1;
      pet.fitness = 10;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I feel great!')
    })
    it('returns "I need a walk" if fitness is less than 4', () => {
      const pet = new Pet('Fido');

      pet.hunger = 1;
      pet.fitness = 2;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I need a walk')
    })
    it('returns "I am hungry" if hunger is more than 4', () => {
      const pet = new Pet('Fido');

      pet.hunger = 5;
      pet.fitness = 8;
      pet.checkUp();

      expect(pet.checkUp()).toEqual('I am hungry')
    })
});

  describe('isAlive', () => {
    it('returns false if the pet hunger is 10 or more', () => {
      const pet = new Pet('Fido');

      pet.hunger = 11;
      pet.fitness = 10;
      pet.age = 1

      expect(pet.isAlive).toEqual(false);
    })
    it('returns false if the pet fitness is 0 or less', () => {
      const pet = new Pet('Fido');

      pet.hunger = 5;
      pet.fitness = -1;
      pet.age = 1

      expect(pet.isAlive).toEqual(false);
    })
    it('returns false if the pet age is 30 or more', () => {
      const pet = new Pet('Fido');

      pet.hunger = 5;
      pet.fitness = 8;
      pet.age = 31

      expect(pet.isAlive).toEqual(false);
    })
    it('returns true if the pet fitness is 1 or more, the pet hunger is 9 or less and the pet age is 29 or less', () => {
      const pet = new Pet('Fido');

      pet.hunger = 5;
      pet.fitness = 5;
      pet.age = 5

      expect(pet.isAlive).toEqual(true);
    })
  
  });
describe('throws an error if the pet is no longer alive', () => {
  it('throws an error message if checkup() is called while the pet is no longer alive', () => {
    const pet = new Pet('Fido');

    pet.hunger = 10;
    pet.checkUp();
    expect(pet.checkUp()).toEqual('Your pet is no longer alive :(')
  })
  it('throws an error message if growUp() is called while the pet is no longer alive', () => {
    const pet = new Pet('Fido');

    pet.age = 31 ;

    expect(() => pet.growUp()).toThrow('Your pet is no longer alive :(')
  })
  it('throws an error message if walk() is called while the pet is no longer alive', () => {
    const pet = new Pet('Fido');

    pet.fitness = 0 ;

    expect(() => pet.walk()).toThrow('Your pet is no longer alive :(')
  })
})