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
		
		LxNotificationService.confirm('Confirmar Borrado',
				'¿Seguro que quiere borrar el medico?', 
				{ cancel:'Cancelar', ok:'Borrar' }, 
				function(answer)
		        {
		            if(answer === true){
		            	medicoManager.deleteMedico(medico);
		        		$location.path("/paneladmin");		            	
		            }					
				});
	};
	mm.updateMedico = function(medico) {
		
		LxNotificationService.confirm('Confirmar Actualizacion',
				'¿Esta seguro que quiere actualizar el medico?', 
				{ cancel:'Cancelar', ok:'Actualizar' }, 
				function(answer)
		        {
		            if(answer === true){
		            	medicoManager.updateMedico(medico);
		        		$location.path("/paneladmin");		            	
		            }					
				});
	};
};