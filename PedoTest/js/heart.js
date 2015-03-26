var hrm = null;

function initHeart(){
	if(window.webapis && window.webapis.motion !== undefined){
		hrm= window.webapis.motion;
		console.log("HRM found");
	}
	else
	{
		console.log("HRM not found");
	}
	
    CONTEXT_TYPE = 'HRM';
}
	function getPedometerData(hrmInfo){
		var pData = {
			heartRate: hrmInfo.heartRate,
            rRInterval: hrmInfo.rRInterval,
		};
		hrmData = pData;
		return pData;
	}
	
	function getData(){
		return hrmData;
	}
	
	
    function handlePedometerInfo(hrmInfo, eventName) {
   	 hrmData = getPedometerData(hrmInfo)
   	 console.log(hrmData);
   	 document.getElementById("rate").innerHTML =  'Hear rate : ' + hrmData.heartRate;
   	 document.getElementById("interval").innerHTML = 'R interva : ' + hrmData.rRInterval;

    }
    function startHeart() {
        hrm.start(
            CONTEXT_TYPE,
            function onSuccess(hrmInfo) {
                handlePedometerInfo(hrmInfo, 'hrm.change');
            }
        );
        
    }
    function stopHeart() {
    	console.log("Stop pedometer");
        hrm.stop(CONTEXT_TYPE);
    }




