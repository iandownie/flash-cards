app.directive('flashCard', function(ScoreFactory) {
	console.log("heereeee");
	return {
		restrict: "E",
		scope: { card: "=" },
		templateUrl: "/js/directives/flashCard/flashCard.html",
		link: function(scope, element, attr) {

		scope.answerQuestion=function(answer){
		// var answeredCorrectly;

			if (answer===true){
				scope.answeredCorrectly=true;
				ScoreFactory.correct++;
			}else{
				scope.answeredCorrectly=false;
				ScoreFactory.incorrect++;
			}
				scope.answered=true;
			};
		}

	};

	// var link = function() {
	// 	return 
	// }
});