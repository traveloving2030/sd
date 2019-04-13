var GPIO = require('onoff').Gpio,
led = new GPIO(18, 'out'),
function light(err, state) {
	if (state == 1) {
		led.writeSync(1) ;
		console.log('on') ;
	}
	else {
		led.writeSync(0) ;
		console.log('off') ;
	}
}
console.log('start') ;
