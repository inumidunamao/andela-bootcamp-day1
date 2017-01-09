'use strict';

function dataTypes (data){
	if (data === null || data === undefined) {
		return 'no value';
	} else if (data.constructor === Boolean){
		return data;
	} else if (data.constructor === Number){
		return (data > 99) ? 
			(data === 100) ? 'equal to 100' : 'more than 100'
			: 'less than 100';
	} else if (data.constructor === String){
		return data.length;
	} else if (data.constructor === Array){
		return data[2];
	} else if (data.constructor === Function){
		return data(true);
	}
}

module.exports = {dataTypes : dataTypes}