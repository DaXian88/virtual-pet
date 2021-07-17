const MAXIMUM_FITNESS = 10;


function Pet(name) {
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
};

Pet.prototype = {
    get isAlive() {
      return this.age < 30 && this.hunger < 10 && this.fitness > 0;
    }
  };

Pet.prototype.growUp = function() {
    this.age += 1;
    this.hunger += 5;
    this.fitness -= 3;
};

Pet.prototype.walk = function () {
    if(this.fitness > (MAXIMUM_FITNESS - 4)){
       this.fitness += MAXIMUM_FITNESS % this.fitness;
    }
    else {this.fitness += 4;
    }
};

Pet.prototype.feed = function () {
    if(this.hunger < 3){
        this.hunger -= this.hunger;
    }
    else{
        this.hunger -= 3;
    } 
};




module.exports = Pet;
