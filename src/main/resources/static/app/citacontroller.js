angular.module("app").controller("CitaController", CitaController);

CitaController.$inject = ["citaManager", "$routeParams", "$location", "LxNotificationService"];

function CitaController(citaManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties
	
	vm.cita = {};
		
	//Controller logic
	
	vm.cita = citaManager.getCita($routeParams.id);

	//Controller actions
	
	vm.deleteCita = function(cita) {
		
		LxNotificationService.confirm('Confirma su deseo',
				'¿Estas seguro de que quieres eliminar esta cita?', 
				{ cancel:'Cancelar', ok:'Eliminar' }, 
				function(answer)
		        {
		            if(answer === true){
		            	citaManager.deleteCita(cita);
		        		$location.path("/paneladmin");		            	
		            }					
		        });
	};
};

