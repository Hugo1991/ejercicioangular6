angular.module("app").factory("medicoManager", medicoManager);

medicoManager.$inject = [ "$resource", "$timeout" ];

function medicoManager($resource, $timeout) {

	var MedicoResource = $resource('/medicos/:id', {
		id : '@id'
	}, {
		update : {
			method : "PUT"
		}
	});

	var medicos= [];

	function autoreload(){
		reload();
		$timeout(autoreload, 5000);
	}
	
	autoreload();
	
	return {
		reload : reload,
		getMedicos : getMedicos,
		getMedico : getMedico,		
		newMedico: newMedico,
		updateMedico : updateMedico,
		deleteMedico : deleteMedico
		
	}

	function reload(){
		var promise = MedicoResource.query(function(newMedicos){
			medicos.length = 0;
			medicos.push.apply(medicos, newMedicos);
		}).$promise;
		return promise;
	}
	
	function getMedicos() {
		return medicos;
	}
	
	function getMedico(id) {
		for (var i = 0; i < medicos.length; i++) {
			if (medicos[i].id.toString() === id) {
				console.log(medicos[i]);
				return medicos[i];
			}
		}
	}

	function newMedico(newMedico) {
		new MedicoResource(newMedico).$save(function(medico) {
			medicos.push(medico);
		});
	}

	function updateMedico(medico) {
		medico.$update();
	}

	function deleteMedico(medico) {
		medico.$remove(function() {
			medicos.splice(medicos.indexOf(medico), 1);
		});
	}}
