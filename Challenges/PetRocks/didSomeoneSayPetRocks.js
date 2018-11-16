class PetRock {
  name;
  price;
  awesomePoints;

  constructor(name, price, awesomePoints) {
      this.name = name;
      this.price = price;
      this.awesomePoints = awesomePoints;
  }
}

class PetRockStore {
  rocks;

  constructor(rocks = []) {
      this.rocks = rocks;
  }

  updateAwesomePoints() {
      for (let i = 0; i < this.rocks.length; i++) {
          if (this.rocks[i].name != 'Rocky' && this.rocks[i].name != 'Sylvester La Stone') {
              if (this.rocks[i].awesomePoints > 0) {
                  if (this.rocks[i].name != 'Stone Cold Steve Austin') {
                      this.rocks[i].awesomePoints = this.rocks[i].awesomePoints - 1
                  }
              }
          } else {
              if (this.rocks[i].awesomePoints < 50) {
                  this.rocks[i].awesomePoints = this.rocks[i].awesomePoints + 1
                  if (this.rocks[i].name == 'Stoney McStoneface') {
                      if (this.rocks[i].price < 11) {
                          if (this.rocks[i].awesomePoints < 50) {
                              this.rocks[i].awesomePoints = this.rocks[i].awesomePoints + 1
                          }
                      }
                      if (this.rocks[i].price < 6) {
                          if (this.rocks[i].awesomePoints < 50) {
                              this.rocks[i].awesomePoints = this.rocks[i].awesomePoints + 1
                          }
                      }
                  }
              }
          }
      }

      return this.rocks;
  }
}

const myRocks = [
  new PetRock('Rocky', 12.50, 1000000),
  new PetRock('Sylvester La Stone', 1240.20, 5000),
  new PetRock('Stone Cold Steve Austin', 1.30, 120),
  new PetRock('Stoney McStoneface', 0.50, 20),
];

const petRockStore = new PetRockStore(myRocks);
petRockStore.updateAwesomePoints();