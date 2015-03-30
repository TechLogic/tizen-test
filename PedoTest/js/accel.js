	var accelData = [];
	var gyroData = [];
	
	
	function getAccelData(){
		 return accelData;		
	}
	
	function getGyroData(){
		return gyroData;		
	}
	
	

function startAccel() {
		window.addEventListener('devicemotion', handleAccel);
		console.log("Start accel");
    }
    
    function stopAccel() {
        window.removeEventListener('devicemotion', handleAccel);
        console.log("Stop accel");
    }

    function handleAccel(e) {
		accelX = e.acceleration.x;
		accelY = -(e.acceleration.y);
		accelZ = -(e.acceleration.z);
		rotx = e.rotationRate.alpha ;
		roty = e.rotationRate.beta ;
		rotz = e.rotationRate.gamma ;
    
		
		accelData.push({ value :{x: accelX, y: accelY, z:accelZ},time : ((new Date().getTime())-startTime)/1000
});
		gyroData.push({ value :{x: rotx, y: roty, z:rotz},time : ((new Date().getTime())-startTime)/1000
});
		
		document.getElementById("accelX").innerHTML =  'Accel X : ' + Math.round(accelX*100)/100;
	   	document.getElementById("accelY").innerHTML = 'Accel Y : ' + Math.round(accelY*100)/100;
	   	document.getElementById("accelZ").innerHTML = 'Accel Z : ' + Math.round(accelZ*100)/100;
	   	document.getElementById("rotX").innerHTML = "Rot X :" + Math.round(rotx*100)/100;
	   	document.getElementById("rotY").innerHTML = "Rot Y :" + Math.round(roty*100)/100;
	   	document.getElementById("rotZ").innerHTML = "Rot Z :" + Math.round(rotz*100)/100;

	   	
	   	//console.log("handle accel");
	};   