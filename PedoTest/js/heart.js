var hrm = null;
var heartData = [];


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
	function handleHRMData(hrmInfo){
		var pData = {
			value: hrmInfo.heartRate,
			time : ((new Date().getTime())-startTime)/1000
		};
		heartData.push(pData);
		return pData;
	}

	function getData(){
		return hrmData;		
	}
	
	function getHRMData(){
		return heartData;
	}
	
	
    function handleHeartInfo(hrmInfo, eventName) {
    
   	 hrmData = handleHRMData(hrmInfo);
   
   	 document.getElementById("rate").innerHTML =  'Hear rate : ' + hrmData.value;

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



