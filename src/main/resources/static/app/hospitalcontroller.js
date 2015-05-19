angular.module("app").controller("HospitalController", HospitalController);

HospitalController.$inject = ["hospitalManager", "$routeParams", "$location", "LxNotificationService"];

function HospitalController(hospitalManager, $routeParams, $location, LxNotificationService) {

	var hm = this;
	
	//View model properties
	
	hm.hospital = {};
		
	//Controller logic
	
	hm.hospital = hospitalManager.getHospital($routeParams.id);

	//Controller actions
	
	hm.deleteHospital = function(hospital) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	hospitalManager.deleteHospital(hospital);
		        		$location.path("/hospitales");		            	
		            }					
		        });
	};
};

