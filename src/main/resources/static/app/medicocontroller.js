angular.module("app").controller("MedicoController", MedicoController);

MedicoController.$inject = ["medicoManager", "$routeParams", "$location", "LxNotificationService"];

function MedicoController(medicoManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties
	
	vm.medico = {};
		
	//Controller logic
	
	vm.medico = medicoManager.getMedico($routeParams.id);

	//Controller actions
	
	vm.deleteMedico = function(medico) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	medicoManager.deleteMedico(medico);
		        		$location.path("/listamedicos");		            	
		            }					
		        });
	};
};