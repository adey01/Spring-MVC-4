function Events($scope, $http){
	$http.get('http://localhost:8082/EventTracker/events.json').
		success(function(data){
			$scope.events = data;
		})
}