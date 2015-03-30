var startTime;
window.onload = function () {
		document.getElementById("start").addEventListener("click",startingApp);
		document.getElementById("stop").addEventListener("click",stoppingApp);
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    
    
};

function startingApp()
{
	startTime = new Date().getTime();
	startAccel();
	initPedo();
	startPedo();
	initHeart();
	startHeart();
}

function stoppingApp()
{

	saveAsJSON();
	stopAccel();
	stopPedo();
	stopHeart();
}