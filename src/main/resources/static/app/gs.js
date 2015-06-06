angular.module("app").service("gs", GlobalService);

GlobalService.$inject = [ "$resource", "$timeout"];

function GlobalService($resource,$timeout){
	
	var vm = this;
	
	vm.usuarios =[];
	vm.usuario ={};
	
	var UsuariosResource = $resource('/usuarios');
		
	vm.logout = function (mail, pass){
		console.log(mail +" "+ pass);
		vm.usuario ={};
		SesionResource.remove(function(){}); 
	}	
	
	var SignupResource = $resource('/personas/darAlta/:id',
			{id: '@id'},
			{ 'update': {method: 'PUT'}}
	);
	var PassResource = $resource ('/personas/misdatos/cambiarpass/:id',
			{id: '@id'},
			{'update': {method: 'PUT'}}
	);
	var PassCorrectaResource = $resource ('personas/misdatos/passOK/:id/:pass',{},
			{get:{method:'GET',params:{id: '@id',pass:'@pass'}}}
	);

	var SesionResource = $resource('/sesion',{save: {method: 'POST'},remove: {method: 'DELETE'}});
	var SesionUsuarioResource = $resource('/sesion/persona');
	
	//sesion
	vm.islog = function(){
		return SesionResource.query();
	}
	
	vm.getUsuarios = function(){
		vm.usuarios=UsuariosResource.query();		
		return 	vm.usuarios;
	}
	
	vm.getUsuario = function(){
		return SesionUsuarioResource.get();				
	}
	
	vm.login = function(mail, pass) {
		console.log(mail+" "+pass);
		vm.datos={};
		vm.datos.mail=mail;
		vm.datos.pass=pass;
		SesionResource.save(vm.datos,function() {});
		vm.usuario=SesionUsuarioResource.get();

		
	}
	
	vm.logout = function() {
		vm.usuarios={};
		SesionResource.remove(function() {});
	}
	vm.signup = function(mail,pass){

		for (var i = 0; i < vm.users.length; i++) {
			if ((vm.users[i].correo === mail)&&(vm.users[i].pass === pass)) {
				vm.persona = vm.users[i];
				$id=vm.users.id;
				SignupResource.update({id:$id},true,function(){vm.showAlert("Te has registrasdo correctamente")});			
			}
		}
		
	}

	vm.pass = function(pass,idpers){
			$id=idpers;
			PassResource.update({id:$id},pass,function(){vm.showAlert("Contraseña cambiada")});	

	}
	vm.passCorrecta = function (pass,id){
		$id=id;
		$pass=pass;
		vm.passcorrecta=PassCorrectaResource.get({id:$id},{pass:$pass},function(){});
		return vm.passcorrecta;
	}
}
	
