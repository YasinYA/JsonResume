//defining the app module
// with the dependencies of only angular-ui-router
angular.module('JSONResume', ['ui.router'])
	//the app routign configuration
	// using the $stateProvider to make states
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: '../index.html'
			})
			.state('resume', {
				url: '/resume',
				templateUrl: 'views/resume.html',
				controller: 'ResumeController'
			});
	}]);