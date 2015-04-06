
app.controller('MainController', function(FlashCardsFactory, $scope, $http) {
	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'];
	// $scope.getLoader=function(){

	// 	console.log("test")
	// }


	$scope.getCategoryCards=function(cat){
			$scope.loader=true;
			console.log("first: ",$scope);
			//setTimeout(function(){
				FlashCardsFactory.getFlashCards(cat).then(function(data){
					$scope.flashCards=data;
					$scope.myCategory=cat;
					$scope.loader=false;
					console.log("second: ",$scope.loader);
				});
			//}, 3000);
		
	};
	$scope.resetCards=function(){
		$scope.loader=true;

		FlashCardsFactory.getFlashCards().then(function(data){
		$scope.flashCards=data;
		$scope.myCategory=false;
		$scope.loader=false;
	});
};


	FlashCardsFactory.getFlashCards().then(function(data){
		$scope.flashCards=data;
			//$scope.loader = false;

	});
// console.log($scope.flashCards);
	// FlashCardsFactory.getFlashCards().then(function(data){
	// 	$scope.flashCards =data;
	// });
	    

	});
