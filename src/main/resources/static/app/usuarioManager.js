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
		nuevoUsuario: nuevoUsuario,
		updateUsuario : updateUsuario,
		deleteUsuario : deleteUsuario
	}

	function reload(){
		var promise = UsuarioResource.query(function(nuevosUsuarios){
			posts.length = 0;
			posts.push.apply(usuarios, nuevosUsuarios);
		}).$promise;
		return promise;
	}
	
	function getUsuarios() {
		return usuarios;
	}

	function getUsuario(id) {
		for (var i = 0; i < usuarios.length; i++) {
			if (usuarios[i].id.toString() === id) {
				return usuarios[i];
			}
		}
	}

	function nuevoUsuario(nuevoUsuario) {
		new UsuarioResource(nuevoUsuario).$save(function(usuario) {
			usuarios.push(usuario);
		});
	}

	function updateUsuario(updatedUsuario) {
		updatedUsuario.$update();
	}

	function deleteUsuario(usuario) {
		usuario.$remove(function() {
			usuarios.splice(usuarios.indexOf(usuario), 1);
		});
	}	
}