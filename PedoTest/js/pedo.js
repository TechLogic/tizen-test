var pedometer = null;
var pedoData = {};

function initPedo(){
	if(window.webapis && window.webapis.motion !== undefined){
		pedometer = window.webapis.motion;
		console.log("Pedometer found");
	}
	else
	{
		console.log("Pedometer not found");
	}
	
    CONTEXT_TYPE = 'PEDOMETER';
}
	function getPedometerData(pedometerInfo){
		var pData = {
			calorie: pedometerInfo.cumulativeCalorie,
            distance: pedometerInfo.cumulativeDistance,
            runDownStep: pedometerInfo.cumulativeRunDownStepCount,
            runStep: pedometerInfo.cumulativeRunStepCount,
            runUpStep: pedometerInfo.cumulativeRunUpStepCount,
            speed: pedometerInfo.speed,
            stepStatus: pedometerInfo.stepStatus,
            totalStep: pedometerInfo.cumulativeTotalStepCount,
            walkDownStep: pedometerInfo.cumulativeWalkDownStepCount,
            walkStep: pedometerInfo.cumulativeWalkStepCount,
            walkUpStep: pedometerInfo.cumulativeWalkUpStepCount,
            walkingFrequency: pedometerInfo.walkingFrequency
		};
		pedometerData = pData;
		return pData;
	}
	
	function getData(){
		return pedometerData;
	}
	
    function handlePedometerInfo(pedometerInfo, eventName) {
   	 pedometerData = getPedometerData(pedometerInfo)
   	 console.log('Total Steps : ' + pedometerData.totalStep);
   	 document.getElementById("calories").innerHTML =  'Total Steps : ' + pedometerData.totalStep;
   	 document.getElementById("steps").innerHTML = 'Calories Burnt : ' + pedometerData.calorie;

    }
    function startPedo() {
        pedometer.start(
        	'PEDOMETER',
            function onSuccess(pedometerInfo) {
                handlePedometerInfo(pedometerInfo, 'pedometer.change');
            }
        );
        
    }
    function stopPedo() {
    	console.log("Stop pedometer");
        pedometer.stop('PEDOMETER');
    }




