angular.module("app").controller("NewUserController", NewUserController);

NewUserController.$inject = ["usuarioManager", "$location"];

function NewUserController(usuarioManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.nuevoUsuario = {};
	
	//Controller actions

	vm.anadirUsuario = function(nuevoUsuario) {
		
		usuarioManager.nuevoUsuario(nuevoUsuario);
		
		vm.nuevoUsuario = {};
		
		$location.path("/");
	};
};