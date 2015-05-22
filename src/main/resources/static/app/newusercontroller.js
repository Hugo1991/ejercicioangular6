angular.module("app").controller("NewUserController", NewUserController);

NewUserController.$inject = ["usuarioManager", "$location"];

function NewUserController(usuarioManager, $location) {

	var vm = this;
	//View model properties
	
	vm.newUsuario = {};
	
	//Controller actions

	vm.addUsuario = function(newUsuario) {
		
		usuarioManager.newUsuario(newUsuario);
		
		vm.newUsuario = {};
		console.log(vm.newUsuario);
		console.log(NewUserController.usuario);
		$location.path("/registrocompleto/");
	};
};