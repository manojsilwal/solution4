var app = angular.module('myApp',[]);

app.constant('ApiBasePath',"https://davids-restaurant.herokuapp.com");

app.controller("narrowItDownController",narrowItDownController);
app.directive('foundItems',foundItems);

function foundItems(){
	var ddo = {
		templateUrl:'foundItem.html',
		scope:{
			foundItem:'<',
			onRemove:'&'
		},
		link:function(scope){
				console.log(scope.onRemove());
			}
	};
	return ddo;
}

app.service("menuSearchService",menuSearchService);
menuSearchService.$inject = ['$http'];
narrowItDownController.$inject = ['$scope','menuSearchService'];

function narrowItDownController($scope,menuSearchService){
	var list = this;
	list.searchTerm = "";
	list.found = [];
	list.error = false;
	list.getMatchedMenuItems = function(){
		if(list.searchTerm == ""){
			list.error = true;
			list.found = [];
		}
		else{
			list.error = false;
			var promise = menuSearchService.getMatchedMenuItems(list.searchTerm);
			promise.then(function(result){
				if(result.length==0){
					list.error = true;
				}
				else{		
					list.error = false;
					list.found = result;
				}
			})
		.catch(function(error){
			console.log(error);
		});
		}
	};

	list.remove = function(index){
		console.log("test");
		console.log(index);
		list.found.splice(index,1);
		console.log(list.found);
	}

}

function menuSearchService($http){
	var service = this;
	service.getMatchedMenuItems = function(searchTerm){
		return $http({
				method:'GET',
				url:"https://davids-restaurant.herokuapp.com/menu_items.json"
			})
			.then(function (result) {
				var data = result.data.menu_items;
			    // process result and only keep items that match
			    var foundItems = matchedItem(data,searchTerm);
			    // return processed items
			    return foundItems;
			});
		}

	var matchedItem = function(menuItems,searchTerm){
		var matchedItems = [];
		console.log(searchTerm);
		console.log(menuItems.length);
		for(data in menuItems){
			var desc = menuItems[data].description;
			if(desc.indexOf(searchTerm)!=-1){
				matchedItems.push(menuItems[data]);
			}
		}
		console.log(matchedItems.length);
		return matchedItems;
	}
}

