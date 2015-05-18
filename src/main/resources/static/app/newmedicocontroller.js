angular.module("app").controller("NewMedicoController", NewMedicoController);

NewMedicoController.$inject = ["medicoManager", "$location"];

function NewMedicoController(usuarioManager, $location) {

	var vm = this;
	var a=true;
	//View model properties
	
	vm.newMedico = {};
	
	//Controller actions

	vm.addMedico = function(newMedico) {
		
		medicoManager.newUsuario(newMedico);
		
		vm.newMedico = {};
		$location.path("/");
	};
};