angular.module("app").controller("CitaListController", CitaListController);

CitaListController.$inject = ["citaManager", "$location"];

function CitaListController(citaManager, $location) {

	var vm = this;
	
	//View model properties
	
	vm.citas = []
		
	//Controller logic
	
	vm.citas = citaManager.getCitas();
	
	//Controller actions

	vm.deleteCita = function(cita) {
		citaManager.deleteCita(cita);
	};
	
	vm.viewCita = function(cita) {
		$location.path("/cita");
	};
	
	vm.reload = function(post) {
		citaManager.reload().then(function(citas){
			vm.citas = citas;
		});
	};
};

