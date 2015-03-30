

var result;

function saveAsJSON(){
	var hrm = getHRMData();
	var gyro = getGyroData();
	var accel = getAccelData();
	
	 result = {};
	
	result.hrm = hrm;
	result.gyrosope = gyro;
	result.accelerometer =  accel;

	tizen.filesystem.resolve('documents', onResolveSuccess, onResolveError, 'rw');
	
	
//	console.log(JSON.stringify(result));
	

}



var documentsDir;
var file;
function onResolveSuccess(dir) {
documentsDir = dir;
file = documentsDir.createFile('test_data_'+startTime+'.json');
file.openStream("rw",writeToStream,onResolveError);
}
 
function onResolveError(e) {
console.log('message: ' + e.message);
}

function writeToStream(fileStream){
	try {
	fileStream.write(JSON.stringify(result));
	fileStream.close();
	}catch(exc){
		console.log('Could not write to file: ' + exc.message);
	}
} 
