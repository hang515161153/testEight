'use strict';

function collect_all_even(collection) {
  var pattern = /\d*[02468]/g;
 	var collection = collection.join(",");
 	var arr = collection.match(pattern);
 	var Arr = [];
 	for(var i in arr){
      		 Arr.push(arr[i]);
    	}
 	return Arr;
 	for(var j=0;j<Arr.length;j++){
 			parseInt(Arr[j]);
 		}
 		return Arr;
}

module.exports = collect_all_even;
