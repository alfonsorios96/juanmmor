var app = angular.module("app", []);

app.controller("clockCtrl", function ($scope) {
	$scope.eventDay = {
		date: new Date("2016-12-31T00:00:00Z"),
		title: "Esto es lo que hacemos"
	}
	$scope.manager = {};
	$scope.update = function(){
		$scope.time = ($scope.eventDay.date - new Date()) / 1000;
		$scope.manager = {
			daysLeft: parseInt($scope.time / 86400),
			hoursLeft: parseInt($scope.time % 86400 / 3600),
			minutesLeft: parseInt($scope.time % 86400 % 3600 / 60),
			secondsLeft: parseInt($scope.time % 86400 % 3600 % 60)
		}
	}
	setInterval(function () {
		$scope.$apply($scope.update());
	}, 1000);

	$scope.update();
});

