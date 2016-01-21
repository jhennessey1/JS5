angular.module('modPeople', [])

angular.module('modPeople')
	.controller('peopleRoller', ['$scope', function($scope){
		$scope.currentText1 = "Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass."

		$scope.currentText2 = "The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee."

		$scope.currentText3 = "Now that there is the Tec-9, a crappy spray gun from South Miami. This gun is advertised as the most popular gun in American crime. Do you believe that shit? It actually says that in the little book that comes with it: the most popular gun in American crime. Like they're actually proud of that shit."

		$scope.showText1 = true
		$scope.showText2 = true
		$scope.showText3 = true
		$scope.clickText = function(event, which) {
			if(which === 'first') {
				$scope.showText1 = !$scope.showText1
				$scope.showInput1 = !$scope.showInput1
			}
			else if(which === 'second') {
				$scope.showText2 = !$scope.showText2
				$scope.showInput2 = !$scope.showInput2
			}
			else if(which === 'third') {
				$scope.showText3 = !$scope.showText3
				$scope.showInput3 = !$scope.showInput3
			}
		}

		$scope.showInput1 = false
		$scope.showInput2 = false
		$scope.showInput3 = false
		$scope.switchDisplay = function(event, which) {
			if(which === 'first') {
				$scope.showInput1 = !$scope.showInput1
				$scope.showText1 = !$scope.showText1
				$scope.currentText1 = $scope.newText1
			}
			else if(which === 'second') {
				$scope.showInput2 = !$scope.showInput2
				$scope.showText2 = !$scope.showText2
				$scope.currentText2 = $scope.newText2
			}
			else if(which === 'third') {
				$scope.showInput3 = !$scope.showInput3
				$scope.showText3 = !$scope.showText3
				$scope.currentText3 = $scope.newText3
			}
		}

	}])