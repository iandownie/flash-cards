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

	    	
	};
});