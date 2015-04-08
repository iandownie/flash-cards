app.directive('error',function(){
	return{
		restrict: 'E',
		template:"<div style='color: purple' ng-transclude></div>",
		transclude: true
	}
})