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
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	usuarioManager.deleteUsuario(usuario);
		        		$location.path("/");		            	
		            }					
		        });
	};
};