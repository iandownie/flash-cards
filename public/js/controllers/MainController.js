
app.controller('MainController', function(FlashCardsFactory, $scope, $http) {
	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'];

	
	$scope.getCategoryCards=function(cat){
		FlashCardsFactory.getFlashCards(cat).then(function(data){
		$scope.flashCards=data;

		$scope.myCategory=cat;
		console.log($scope.myCategory)
	});
	};
	$scope.resetCards=function(){
		FlashCardsFactory.getFlashCards().then(function(data){
		$scope.flashCards=data
		$scope.myCategory=false;
	});
};


	FlashCardsFactory.getFlashCards().then(function(data){
		$scope.flashCards=data
	});
// console.log($scope.flashCards);
	// FlashCardsFactory.getFlashCards().then(function(data){
	// 	$scope.flashCards =data;
	// });
	    

});