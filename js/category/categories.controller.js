(function() {
	"use strict";
	angular.module('menuApp')
	.controller('categoriesController',categoriesController);

	categoriesController.$inject = ['items'];

	function categoriesController(items){
		var catCtrl = this;
		catCtrl.items = items;
	}

})();