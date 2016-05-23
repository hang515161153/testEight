'use strict';

function collect_all_even(collection) {
  var pattern = /\d*[02468]/g;
 	var collection = collection.join(",");
 	var arr = collection.match(pattern);
 	var Arr = [];
 	for(var i in arr){
      		 Arr.push(parseInt.arr[i]);
    	}
 	return Arr;
 	
 	
}

module.exports = collect_all_even;
