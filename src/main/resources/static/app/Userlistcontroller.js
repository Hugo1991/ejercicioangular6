angular.module("app").controller("UserListController", UserListController);

PostListController.$inject = ["usuarioManager", "$location"];

function UserListController(usuarioManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.usuarios = []
		
	//Controller logic
	
	vm.usuarios = blogManager.getUsuarios();
	
	//Controller actions

	vm.deletePost = function(usuario) {
		usuarioManager.deleteUsuario(usuario);
	};
	
	vm.viewUsuario = function(usuario) {
		$location.path("/usuario");
	};
	
	vm.reload = function(post) {
		usuarioManager.reload().then(function(usuarios){
			vm.usuarios = usuarios;
		});
	};
};

