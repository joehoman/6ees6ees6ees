class Grub {
  constructor() {
    this.age = 0;
    this.color = 'pink';
    this.food = 'jelly';
  }
  eat(){
    return 'Mmmmmmmmm jelly';
  }
}

class Bee extends Grub {
  constructor(){
  super();
  this.age = 5;
  this.color ='yellow';
  this.job = 'Keep on growing';
  }
}

class HoneyMakerBee extends Bee {
  constructor(){
    super();
    this.age = 10;
    this.job = 'make honey';
    this.canFly = 'true';
    this.honeyPot = 0;
  }
  makeHoney(){
    this.honeyPot += 1;
  }
  giveHoney(){
    this.honeyPot -= 1;
  }
}

class ForagerBee extends Bee {
  constructor(){
    super();
    this.age = 10;
    this.job = 'find pollen';
    this.canFly = true;
    this.treasureChest = [];
  }
  forage(treasure){
    this.treasureChest.push(treasure);
  }
}

class RetiredForagerBee extends ForagerBee{
  constructor(){
    super();
    this.age = 40
    this.job = 'gamble'
    this.canFly = false
    this.color = 'grey'
    this.treasureChest = []
  }
  forage(){
    return 'I am too old, let me play cards instead'
  }
  gamble(treasure){
    this.treasureChest.push(treasure)
  }

}
