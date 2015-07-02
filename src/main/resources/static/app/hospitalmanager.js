angular.module("app").factory("hospitalManager", hospitalManager);

hospitalManager.$inject = [ "$resource", "$timeout" ];

function hospitalManager($resource, $timeout) {

	var HospitalResource = $resource('/hospitales/:id', {
		id : '@id'
	}, {
		update : {
			method : "PUT"
		}
	});

	var hospitales = [];

	function autoreload(){
		reload();
		$timeout(autoreload, 5000);
	}
	
	autoreload();
	
	return {
		reload : reload,
		getHospitales : getHospitales,
		getHospital : getHospital,		
	}

	function reload(){
		var promise = HospitalResource.query(function(newhospitales){
			hospitales.length = 0;
			hospitales.push.apply(hospitales, newhospitales);
		}).$promise;
		return promise;
	}
	
	function getHospitales() {
		return hospitales;
	}

	function getHospital(id) {
		for (var i = 0; i < hospitales.length; i++) {
			if (hospitales[i].id.toString() === id) {
				console.log(hospitales[i]);
				return hospitales[i];
			}
		}
	}	
}