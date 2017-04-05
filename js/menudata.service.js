angular.module('data')
.service('MenuDataService',MenuDataService);

MenuDataService.$inject = ['$http'];

function MenuDataService($http) {
	// body...
	var service = this;

	service.getAllCategories = function(){
		return $http({
				method:'GET',
				url:"https://davids-restaurant.herokuapp.com/categories.json"
			})
			.then(function (result) {
				console.log(result.data);
			    return result.data;
			});
	}

	service.getItemsForCategory = function(categoryShortName){
		return $http({
				method:'GET',
				url:"https://davids-restaurant.herokuapp.com/menu_items.json?category="+categoryShortName
			})
			.then(function (result) {
			    // process result and only keep items that match
			    // return processed items
			    console.log(result.data);
			    return result.data;
			});
	}
}