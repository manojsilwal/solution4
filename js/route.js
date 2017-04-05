(function() {
	// body...
	"use strict";
	angular.module('menuApp')
	.config(RouteConfig);

	RouteConfig.$inject = ['$urlRouterProvider','$stateProvider'];

	function RouteConfig($urlRouterProvider, $stateProvider){
		$urlRouterProvider.otherwise('/categories');
		
		$stateProvider
		.state('items',{
			url:'/items/{category}',
			templateUrl:'templates/items.html',
			controller:'itemController as itemCtrl',
			resolve:{
				items:['$stateParams','MenuDataService',function($stateParams,MenuDataService){
					return MenuDataService.getItemsForCategory($stateParams.category)
							.then(function(result){
								console.log(result);
								return result;
							});
					}]
				}
			})
		.state('categories',{
			url:'/categories',
			templateUrl:'templates/categories.html',
			controller:'categoriesController as catCtrl',
			resolve:{
				items:['MenuDataService',function(MenuDataService){
					return MenuDataService.getAllCategories()
							.then(function(result){
								console.log(result);
								return result;
							});
				}]
			}
		})
		

	}
})();