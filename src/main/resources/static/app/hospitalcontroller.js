angular.module("app").controller("HospitalController", HospitalController);

HospitalController.$inject = ["hospitalManager", "$routeParams", "$location", "LxNotificationService"];

function HospitalController(hospitalManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties
	
	vm.hospital = {};
		
	//Controller logic
	
	vm.hospital = hospitalManager.getHospital($routeParams.id);

	//Controller actions
	
	vm.deleteHospital = function(hospital) {
		
		LxNotificationService.confirm('Confirmar Borrado',
				'¿Seguro que quiere eliminar este hospital?', 
				{ cancel:'Cancelar', ok:'Borrar' }, 
				function(answer)
		        {
		        	console.log(hospital);
		            if(answer === true){
		            	hospitalManager.deleteHospital(hospital);
		        		$location.path("/");		            	
		            }					
		        });
	};
};

