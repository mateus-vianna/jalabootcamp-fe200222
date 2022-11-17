const cellphone = {
  name: 'A7',
  weight: '123kg',
  size: '14cm',
  isOn: false,
  turnOn(turn) {
    this.isOn = turn;
  },
};

console.log('%c%s', 'color: #ff0000', cellphone);
