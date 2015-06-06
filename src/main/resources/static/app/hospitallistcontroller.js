angular.module("app").controller("HospitalListController", HospitalListController);

HospitalListController.$inject = ["hospitalManager", "$location"];

function HospitalListController(hospitalManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.hospitales = []
		
	//Controller logic
	
	vm.hospitales = hospitalManager.getHospitales();
	
	//Controller actions

	vm.deleteHospital = function(hospital) {
		hospitalManager.deleteHospital(hospital);
	};
	
	vm.viewHospital = function(hospital) {
		$location.path("/hospital");
	};
	
	vm.reload = function(hospital) {
		hospitalManager.reload().then(function(hospitales){
			vm.hospitales = hospitales;
		});
	};
};

