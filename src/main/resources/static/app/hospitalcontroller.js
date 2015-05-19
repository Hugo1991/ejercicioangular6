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
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	hospitalManager.deleteHospital(hospital);
		        		$location.path("/listahospitales");		            	
		            }					
		        });
	};
};

