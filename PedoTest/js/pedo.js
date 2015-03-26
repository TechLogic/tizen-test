var pedometer = null;

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
	
	function resetData() {
        console.log("Reset Data");
        pedometerData = {
            calorie: 0,
            distance: 0,
            runDownStep: 0,
            runStep: 0,
            runUpStep: 0,
            speed: 0,
            stepStatus: '',
            totalStep: 0,
            walkDownStep: 0,
            walkStep: 0,
            walkUpStep: 0,
            walkingFrequency: 0
        };
    }
	
    function handlePedometerInfo(pedometerInfo, eventName) {
   	 pedometerData = getPedometerData(pedometerInfo)
   	 console.log('Total Steps : ' + pedometerData.totalStep);
   	 document.getElementById("calories").innerHTML =  'Total Steps : ' + pedometerData.totalStep;
   	 document.getElementById("steps").innerHTML = 'Calories Burnt : ' + pedometerData.calorie;

    }
    function startPedo() {
        resetData();
        pedometer.start(
            CONTEXT_TYPE,
            function onSuccess(pedometerInfo) {
                handlePedometerInfo(pedometerInfo, 'pedometer.change');
            }
        );
        
    }
    function stopPedo() {
    	console.log("Stop pedometer");
        pedometer.stop(CONTEXT_TYPE);
    }




