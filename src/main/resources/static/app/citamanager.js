angular.module("app").factory("citaManager", citaManager);

citaManager.$inject = [ "$resource", "$timeout" ];

function citaManager($resource, $timeout) {

	var CitaResource = $resource('/citas/:id', {
		id : '@id'
	}, {
		update : {
			method : "PUT"
		}
	});

	var citas= [];

	function autoreload(){
		reload();
		$timeout(autoreload, 5000);
	}
	
	autoreload();
	
	return {
		reload : reload,
		getCitas : getCitas,
		getCita : getCita,		
		newCita: newCita,
		updateCita : updateCita,
		deleteCita : deleteCita
	}

	function reload(){
		var promise = CitaResource.query(function(newCitas){
			citas.length = 0;
			console.log(newCitas);
			citas.push.apply(citas, newCitas);
		}).$promise;
		return promise;
	}
	
	function getCitas() {
		return citas;
	}

	function getCita(id) {
		for (var i = 0; i < citas.length; i++) {
			if (citas[i].id.toString() === id) {
				return citas[i];
			}
		}
	}

	function newCita(newCita) {
		new CitaResource(newCita).$save(function(cita) {
			citas.push(cita);
		});
	}

	function updateCita(updatedCita) {
		updatedCita.$update();
	}

	function deleteCita(cita) {
		cita.$remove(function() {
			citas.splice(citas.indexOf(cita), 1);
		});
	}	
}