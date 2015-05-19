angular.module("app").controller("NewCitaController", NewCitaController);

NewCitaController.$inject = ["citaManager", "$location"];

function NewCitaController(citaManager, $location) {

	var vm = this;
	var a=true;
	//View model properties
	
	vm.newCita = {};
	
	//Controller actions

	vm.addCita = function(newCita) {
		
		citaManager.newCita(newCita);
		
		vm.newCita = {};
		console.log(newCita);
		$location.path("/");
	};
};