app.controller('NewCardController', function(FlashCardsFactory, $scope){
	$scope.submitCard=function(card){
        console.log("test submitCard")
		FlashCardsFactory.submitCard(card)
        $scope.resetForm()

	}


	$scope.newCard = {
    question: null,
    category: null,
    answers: [
        { text: null, correct: false },
        { text: null, correct: false },
        { text: null, correct: false }
    ]
	}
    var clear= angular.copy($scope.newCard);

        $scope.resetForm=function(){
            FlashCardsFactory.getFlashCards($scope.newCardForm.category)
            $scope.newCard=angular.copy(clear);
            $scope.newCardForm.$setPristine();
            $scope.newCardForm.$setUntouched();
    }
})