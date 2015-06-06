 angular.module("app").factory("usuarioManager", usuarioManager);

usuarioManager.$inject = [ "$resource", "$timeout" ];

function usuarioManager($resource, $timeout) {

	var UsuarioResource = $resource('/usuarios/:id', {
		id : '@id'
	}, {
		update : {
			method : "PUT"
		}
	});

	var usuarios= [];

	function autoreload(){
		reload();
		$timeout(autoreload, 5000);
	}
	
	autoreload();
	
	return {
		reload : reload,
		getUsuarios : getUsuarios,
		getUsuario : getUsuario,		
		newUsuario: newUsuario,
		updateUsuario : updateUsuario,
		deleteUsuario : deleteUsuario
	}

	function reload(){
		var promise = UsuarioResource.query(function(newUsuarios){
			usuarios.length = 0;
			usuarios.push.apply(usuarios, newUsuarios);
		}).$promise;
		return promise;
	}
	
	function getUsuarios() {
		return usuarios;
	}

	function getUsuario(id) {
		for (var i = 0; i < usuarios.length; i++) {
			if (usuarios[i].id.toString() === id) {
				console.log(usuarios[i]);
				return usuarios[i];
			}
		}
	}

	function newUsuario(newUsuario) {
		new UsuarioResource(newUsuario).$save(function(usuario) {
			console.log(usuario);
			usuarios.push(usuario);
		});
	}

	function updateUsuario(usuario) {
		usuario.$update();
	}

	function deleteUsuario(usuario) {
		usuario.$remove(function() {
			usuarios.splice(usuarios.indexOf(usuario), 1);
		});
	}	
}