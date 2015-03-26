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
	function getHRMData(hrmInfo){
		var pData = {
			heartRate: hrmInfo.heartRate,
            rRInterval: hrmInfo.rRInterval,
		};
		hrmData = pData;
		console.log(hrmInfo);
		return pData;
	}
	
	function getData(){
		return hrmData;
	}
	
	
    function handleHeartInfo(hrmInfo, eventName) {
   	 hrmData = getHRMData(hrmInfo)
   	 //console.log(hrmData);
   	 document.getElementById("rate").innerHTML =  'Hear rate : ' + hrmData.heartRate;
   	 document.getElementById("interval").innerHTML = 'R interva : ' + hrmData.rRInterval;

    }
    function startHeart() {
        hrm.start(
        	'HRM',
            function onSuccess(hrmInfo) {
                handleHeartInfo(hrmInfo, 'hrm.change');
            }
        );
        
    }
    function stopHeart() {
    	console.log("Stop hrm");
        hrm.stop('HRM');
    }




