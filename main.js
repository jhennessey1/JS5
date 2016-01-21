angular.module('modPeople', [])

angular.module('modPeople')
	.controller('peopleRoller', ['$scope', function($scope){
		$scope.showText1 = true
		$scope.showText2 = true
		$scope.showText3 = true
		$scope.clickText = function(event, which) {
			if(which === 'first') {
				$scope.showText1 = !$scope.showText1
			}
			else if(which === 'second') {
				$scope.showText2 = !$scope.showText2
			}
			else if(which === 'third') {
				$scope.showText3 = !$scope.showText3
			}
		}
	}])