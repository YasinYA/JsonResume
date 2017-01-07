angular.module('JSONResume', ['ui.router'])
	.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('');

		$stateProvider
			.state('resume', {
				url: '',
				templateUrl: 'views/resume.html',
				controller: 'ResumeController'
			});
	}]);