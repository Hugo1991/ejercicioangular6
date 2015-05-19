angular.module("app").controller("NewHospitalController", NewHospitalController);

NewHospitalController.$inject = ["hospitalManager", "$location"];

function NewHospitalController(hospitalManager, $location) {

	var vm = this;
	//View model properties
	
	vm.newHospital = {};
	
	//Controller actions

	vm.addHospital = function(newHospital) {
		
		hospitalManager.newHospital(newHospital);
		
		vm.newHospital = {};
		$location.path("/listaHospitales");
	};
};