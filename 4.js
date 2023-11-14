function ElectroDevice(isTurnOn) {
    this.isTurnOn = isTurnOn;
}

ElectroDevice.prototype.turn = function() {
    if (this.isTurnOn) {
        this.isTurnOn = false;
      } else {
        this.isTurnOn = true;
      }
}

ElectroDevice.prototype.isTurn = function() {
    if (this.isTurnOn) {
        return 'Телевизор включен';
      } else {
        return 'Телевизор выключен';
      }
}

const TV = new ElectroDevice(true);
TV.size = 55;
TV.diagonal = function() {
    return `Диагональ данного телевизора ${TV.size} дюймов`;
}

const Computer = new ElectroDevice(false);
Computer.os = 'Windows';
Computer.ram = 16;
Computer.description = function() {
    return `Это компьютер с операционной системой ${Computer.os} и оперативной памятью ${Computer.ram} Гб`;
}
 
let samsung = Object.create(TV);
console.log(samsung.diagonal());
console.log(samsung.isTurn());
samsung.turn();
console.log(samsung.isTurn());

let lenovo = Object.create(Computer);
console.log(lenovo.description());