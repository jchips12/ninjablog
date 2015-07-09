angular.module('hello', []).controller('home', function($scope, $http) {
	$http.get('/ws/resource/').success(function(data) {
		$scope.greeting = data;
	})
})