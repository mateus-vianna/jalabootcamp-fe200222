
const mobile = { 
    name: "A7",
    manufacturer: 'motorola',
    isOnline: false,
    screenIsOn: false,
    isCalling: false,
    OS: 'android', 
    call: function(call){ this.isCalling = call},
    turnOnScreen: function() {this.screenIsOn = !this.screenIsOn},
    turnOnOff: function(){this.isOnline = !this.isOnline}
}