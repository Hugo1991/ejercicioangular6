angular.module("app").factory("hospitalManager", hospitalManager);

citaManager.$inject = [ "$resource", "$timeout" ];

function hospitalManager($resource, $timeout) {

	var CitaResource = $resource('/hospitales/:id', {
		id : '@id'
	}, {
		update : {
			method : "PUT"
		}
	});

	var hospitales= [];

	function autoreload(){
		reload();
		$timeout(autoreload, 5000);
	}
	
	autoreload();
	
	return {
		reload : reload,
		getHospitales : getHospitales,
		getHospital : getHospital,		
		newHospital: newHospital,
		updateHospital : updateHospital,
		deleteHospital : deleteHospital
	}

	function reload(){
		var promise = CitaResource.query(function(newCitas){
			hospitales.length = 0;
			hospitales.push.apply(hospitales, newHospitales);
		}).$promise;
		return promise;
	}
	
	function getHospitales() {
		return hospitales;
	}

	function getHospital(id) {
		for (var i = 0; i < hospitales.length; i++) {
			if (hospitales[i].id.toString() === id) {
				return hospitales[i];
			}
		}
	}

	function newHospital(newHospital) {
		new HospitalResource(newHospital).$save(function(hospital) {
			hospitales.push(hospital);
		});
	}

	function updateHospital(updatedHospital) {
		updatedHospital.$update();
	}

	function deleteHospital(hospital) {
		hospital.$remove(function() {
			hospitales.splice(hospitales.indexOf(hospital), 1);
		});
	}	
}