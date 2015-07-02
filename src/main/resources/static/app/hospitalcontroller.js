angular.module("app").controller("HospitalController", HospitalController);

HospitalController.$inject = ["hospitalManager", "$routeParams", "$location", "LxNotificationService"];

function HospitalController(hospitalManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties
	
	vm.hospital = {};
		
	//Controller logic
	
	vm.hospital = hospitalManager.getHospital($routeParams.id);

};

