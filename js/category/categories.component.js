(function(){
	"use strict";
	angular.module('data')
	.component('categoryList', {
		templateUrl:'templates/categoryComponent.html',
		controller:categoryComponentController,
		bindings:{
			categories:'<'
		}
	});

	function categoryComponentController($scope){
		var $ctrl = this;
		/*$ctrl.$onInit = function() {
			console.log($ctrl.categories);
		}*/
	}
})();