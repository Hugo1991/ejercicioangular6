angular.module("app").controller("UserController", UserController);

UserController.$inject = ["usuarioManager", "$routeParams", "$location", "LxNotificationService"];

function UserController(usuarioManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties
	
	vm.usuario = {};
		
	//Controller logic
	
	vm.usuario = usuarioManager.getUsuario($routeParams.id);

	//Controller actions
	
	vm.deleteUsuario = function(usuario) {
		
		LxNotificationService.confirm('Confirma tu deseo',
				'¿Estas seguro de que quieres eliminar este usuario?', 
				{ cancel:'Cancelar', ok:'Eliminar' }, 
				function(answer)
		        {
		        console.log(usuario);
		            if(answer === true){
		            	usuarioManager.deleteUsuario(usuario);
		        		$location.path("/paneladmin");		            	
		            }					
		        });
	};
};