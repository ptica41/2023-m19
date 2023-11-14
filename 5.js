class ElectroDevice {
    constructor(isTurnOn, cost) {
      this.isTurnOn = isTurnOn;
      this.cost = cost;
    }
    turn() {
      if (this.isTurnOn) {
        this.isTurnOn = false;
      } else {
        this.isTurnOn = true;
      }
    }
  }
  
  class TV extends ElectroDevice {
    constructor(weight, size, isTurnOn, cost) {
      super(isTurnOn, cost);
      this.weight = weight;
      this.size = size;
    }
    diagonal() {
      return `Диагональ данного телевизора ${this.size} дюймов`;
    }
    isTurn() {
      if (this.isTurnOn) {
        return 'Телевизор включен';
      } else {
        return 'Телевизор выключен';
      }
    } 
  }
  
  class Computer extends ElectroDevice {
    constructor(os, ram, isTurnOn, cost) {
      super(isTurnOn, cost);
      this.os = os;
      this.ram = ram;
    }
    description() {
      return `Это компьютер с операционной системой ${this.os} и оперативной памятью ${this.ram} Гб`;
    }
  }
  
  let samsung = new TV(weight=1.5, size=55, isTurnOn=true, cost=120000);
  
  let lg = new TV(weight=2, size=65, isTurnOn=false, cost=135000);
  
  let lenovo = new Computer('Windows', 8, false, 50000);
  
  let macBook = new Computer('Mac', 16, true, 150000);
  
  console.log(samsung.diagonal());
  
  console.log(lg.isTurn());
  
  lg.turn();
  
  console.log(lg.isTurn());
  
  console.log(lenovo.description());
  
  console.log(macBook.description());