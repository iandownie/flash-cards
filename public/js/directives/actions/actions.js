app.directive('onClick', function(){
	return{
		restrict: "A",
		link: function(s, e, a){
			e.on('click', function () {
				$(this).removeClass('animation1')
				console.log(this)
				$(this).addClass('animation1')
			});
		} 
	}
})