	function startAccel() {
		window.addEventListener('devicemotion', handleAccel);
		console.log("Start accel");
    }
    
    function stopAccel() {
        window.removeEventListener('devicemotion', handleAccel);
        console.log("Stop accel");
    }

    function handleAccel(e) {
		accelX: e.accelerationIncludingGravity.x;
		accelY: -e.accelerationIncludingGravity.y;
		accelZ: -e.accelerationIncludingGravity.z;
    	console.log(accelX);
    	
		document.getElementById("accelX").innerHTML =  'Accel X : ' + accelX;
	   	document.getElementById("accelY").innerHTML = 'Accel Y : ' + accelY;
	   	document.getElementById("accelZ").innerHTML = 'Accel Z : ' + accelZ;
	   	console.log("handle accel");
	};   