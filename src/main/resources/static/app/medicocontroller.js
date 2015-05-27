angular.module("app").controller("MedicoController", MedicoController);

MedicoController.$inject = ["medicoManager", "$routeParams", "$location", "LxNotificationService"];

function MedicoController(medicoManager, $routeParams, $location, LxNotificationService) {

	var mm = this;
	
	//View model properties
	
	mm.medico = {};
		
	//Controller logic
	
	mm.medico = medicoManager.getMedico($routeParams.id);

	//Controller actions
	
	mm.deleteMedico = function(medico) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	medicoManager.deleteMedico(medico);
		        		$location.path("/paneladmin");		            	
		            }					
				});
	};
	mm.updateMedico = function(medico) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to update this post?', 
				{ cancel:'Cancelar', ok:'actualizar' }, 
				function(answer)
		        {
		            if(answer === true){
		            	medicoManager.updateMedico(medico);
		        		$location.path("/paneladmin");		            	
		            }					
				});
	};
};