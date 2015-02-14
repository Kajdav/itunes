
var app = angular.module('itunes');

app.service('itunesService', function($http, $q){
  //This service is what will do the 'heavy lifting' and get our data from the iTunes API.
  //Also not that we're using a 'service' and not a 'factory' so all your method you want to call in your controller need to be on 'this'.

  //Write a method that accepts an artist's name as the parameter, then makes a 'JSONP' http request to a url that looks like this
  //https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  //Note that in the above line, artist is the parameter being passed in. 
  //You can return the http request or you can make your own promise in order to manipulate the data before you resolve it.

  this.getSongs = function(artist){
  	var deferred = $q.defer();
  	$http({
  		method: 'JSONP',
  		url: 'https://itunes.apple.com/search?term=' + artist + '&callback=JSON_CALLBACK'
  	}).then(function(res){
  		res = res.data.results;
  		console.log(res);
  		var results = [];
  		for(var i = 0; i < res.length; i++){
  			var obj = {
  				AlbumArt: res[i].artworkUrl60,
  				Artist: res[i].artistName,
  				Collection: res[i].collectionName,
  				Play: res[i].previewUrl,
  				Type: res[i].kind
  			};
  			results.push(obj);
  		}
  		deferred.resolve(results);
  	});
  	return deferred.promise;
  }


});