angular.module("app").controller("UserListController", UserListController);

UserListController.$inject = ["usuarioManager", "$location"];

function UserListController(usuarioManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.usuarios = []
		
	//Controller logic
	
	vm.usuarios = usuarioManager.getUsuarios();
	
	//Controller actions

	vm.deleteUsuario = function(usuario) {
		usuarioManager.deleteUsuario(usuario);
	};
	
	vm.viewUsuario = function(usuario) {
		$location.path("/");
	};
	
	vm.reload = function(usuario) {
		usuarioManager.reload().then(function(usuarios){
			vm.usuarios = usuarios;
		});
	};
};

