(function() {
	"use strict";
	angular.module('menuApp')
	.controller('itemController',itemController);

	itemController.$inject = ['items'];

	function itemController(items){
		var itemCtrl = this;
		itemCtrl.items = items.menu_items;
		itemCtrl.categoryName = items.category.name;
	}

})();