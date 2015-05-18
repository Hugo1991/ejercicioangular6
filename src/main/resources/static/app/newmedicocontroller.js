angular.module("app").controller("NewMedicoController", NewMedicoController);

NewMedicoController.$inject = ["medicoManager", "$location"];

function NewMedicoController(usuarioManager, $location) {

	var mm = this;
	var a=true;
	//View model properties
	
	mm.newMedico = {};
	
	//Controller actions

	mm.addMedico = function(newMedico) {
		
		medicoManager.newMedico(newMedico);
		
		mm.newMedico = {};
		$location.path("/");
	};
};