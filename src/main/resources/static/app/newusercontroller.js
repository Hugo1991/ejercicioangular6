angular.module("app").controller("NewUserController", NewUserController);

NewUserController.$inject = ["usuarioManager", "$location"];

function NewUserController(usuarioManager, $location) {

	var vm = this;
	var a=true;
	//View model properties
	
	vm.newUsuario = {};
	
	//Controller actions

	vm.addUsuario = function(newUsuario) {
		
		usuarioManager.newUsuario(newUsuario);
		
		vm.newUsuario = {};
		$location.path("/usuario");
	};
};