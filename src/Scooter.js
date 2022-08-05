class Scooter{
  constructor(){
      this.scooterID = Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
     // this.charge = 100
      this.charge = Math.floor(Math.random()* 101)
  }
}

const s1 = new Scooter()
console.log(s1)
module.exports = Scooter;
