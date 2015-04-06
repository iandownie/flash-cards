var app = angular.module('FlashCards', []);
app.controller('FlashCardController', function(ScoreFactory,$scope){
	$scope.answerQuestion=function(answer){
		// var answeredCorrectly;

		if (answer===true){
			$scope.answeredCorrectly=true;
			ScoreFactory.correct++;
		}else{
			$scope.answeredCorrectly=false;
			ScoreFactory.incorrect++;
		}
		$scope.answered=true;
	};


});
 
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

app.factory('FlashCardsFactory', function ($http) {
    return { 
    	getFlashCards: function(cat){

    		var parameters={}
    		if (cat){
    			parameters.category=cat;
    		}
	    	return $http.get('/cards',{
	    		params:parameters
	    	}).then(function(response){

	    		return response.data;
	    	})
	    }

	    	// return $http.get('/cards',{something:cat}).then(function(response){
	    	// 	params:
	    	// 	c
	    	// 	var test=[];
	    	// 	for(var i=0; i<response.data.length; i++){
	    	// 		console.log("cat: "+cat, "category: "+ response.data[i].category);
	    	// 		if (response.data[i].category===cat){
	    	// 			test.push(response.data[i]);
	    	// 		}
	    	// 	}
		    // 	return test;
	    	// })
	    // } 
	};
});

app.factory("ScoreFactory",function(){
	
	return {
        correct: 0,
        incorrect: 0
    };
})
app.controller("StatsController",function($scope,ScoreFactory){
	$scope.scores = ScoreFactory;
})