angular.module("app").controller("MedicoListController", MedicoListController);

MedicoListController.$inject = ["medicoManager", "$location"];

function MedicoListController(medicoManager, $location) {

	var mm = this;
	
	//View model properties
	
	mm.medicos = []
	//mm.medicosLibres = []
	//Controller logic
	
	mm.medicos = medicoManager.getMedicos();
	//Controller actions

	mm.deleteMedico = function(medico) {
		medicoManager.deleteMedico(medico);
	};
	
	mm.viewMedico = function(medico) {
		$location.path("/medico");
	};

	mm.reload = function(medico) {

		medicoManager.reload().then(function(medicos){
			 if(medico.ocupado==false){
				mm.medicos = medicos;
			}
		});
	};
};

