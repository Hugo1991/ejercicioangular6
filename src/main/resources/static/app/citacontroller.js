angular.module("app").controller("CitaController", CitaController);

CitaController.$inject = ["citaManager", "$routeParams", "$location", "LxNotificationService"];

function CitaController(citaManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties
	
	vm.cita = {};
		
	//Controller logic
	
	vm.cita = citaManager.getCita($routeParams.id);

	//Controller actions
	
	vm.deleteCita = function(citta) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	citaManager.deletePostCita(cita);
		        		$location.path("/");		            	
		            }					
		        });
	};
};

