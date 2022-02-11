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