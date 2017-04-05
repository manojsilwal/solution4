(function(){
	"use strict";
	angular.module('data')
	.component('itemList', {
		templateUrl:'templates/itemComponent.html',
		controller:itemComponentController,
		bindings:{
			items:'<'
		}
	});

	function itemComponentController(){
		var $ctrl = this;
		$ctrl.$onInit = function() {
			console.log($ctrl.items);
		}
	}

})();