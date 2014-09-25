var app = angular.module('itunes');

app.service('itunesService', function($http, $q){

  this.retrieveData = function(search){ //http request to retrieve search data from iTunes
  	var deferred = $q.defer();
  	$http({
  		method: 'JSONP',
  		url: 'https://itunes.apple.com/search?term=' + search + '&callback=JSON_CALLBACK'
  	})
  		.then(function(data){
  			console.log(data.data.results); //console.logs the raw results from iTunes, for testing purposes
  			return deferred.resolve(data); //resolves promise and sends raw data to the controller
  		});
  	return deferred.promise;
  }
});



	//HELD IN RESERVE: resolves the promise and returns raw data to the controller.  Removed so we could parse data in the service and send it to the controller.
  	// 	.then(function(data){
  	// 		return deferred.resolve(data.data.results);
  	// 		console.log(data.data.results);
  	// 	});
  	// return deferred.promise;

  //DONE:
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.
