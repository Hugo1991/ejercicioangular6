angular.module("app").controller("HospitalListController", HospitalListController);

HospitalListController.$inject = ["hospitalManager", "$location"];

function HospitalListController(hospitalManager, $location) {

	var hm = this;
	
	//View model properties
	
	hm.hospitales = []
		
	//Controller logic
	
	hm.hospitales = hospitalManager.getHospitales();
	
	//Controller actions

	hm.deleteUsuario = function(hospital) {
		hospitalManager.deleteHospital(hospital);
	};
	
	hm.viewHospital = function(hospital) {
		$location.path("/");
	};
	
	hm.reload = function(hospital) {
		hospitalManager.reload().then(function(hospitales){
			vm.hospitales = hospitales;
		});
	};
};

