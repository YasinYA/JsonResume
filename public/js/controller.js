angular.module('JSONResume')	
	.controller('ResumeController', ['$scope', '$http', function($scope, $http){
			$scope.getData = function() {
				$http.get('/data').success(function(data) {
					$scope.data = data;
					console.log(data);
				});
			};
		
	}])
	.filter('cap_first_letter', function(){
		return function(input, scope) {
			if (input!=null)
			input = input.toLowerCase();
			return input.substring(0,1).toUpperCase()+input.substring(1);
		}
	});