//just getting a reference of the module  
angular.module('JSONResume')	
	.controller('ResumeController', ['$scope', '$http', function($scope, $http){
			//this function will be excuted when the page is loaded
			//and then the http get request will be next thing
			// then angular will bind the data to the view
			$scope.getData = function() {
				$http.get('/data').success(function(data) {
					$scope.data = data;
				});
			}
		
	}]);