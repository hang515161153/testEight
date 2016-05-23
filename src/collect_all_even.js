'use strict';

function collect_all_even(collection) {
  	var pattern = /\d*[02468]/g;
 	var collection = collection.join(",");
 	var arr = collection.match(pattern);
 	return arr;
}

module.exports = collect_all_even;
