angular.module("app").controller("LogController", LogController);
LogController.$inject = ["gs","$location","$routeParams"];

function LogController(gs,$location,$routeParams){
	var vm = this;
	vm.mail = "";
	vm.pass ="";
	
	
	vm.usuarios = gs.getUsuarios();
	vm.usuario=gs.getUsuario();
	
	vm.maillog="";
	
	vm.passlog="";
	vm.islog=gs.islog();
	
	vm.login = function(){

		
		var valido = gs.login(vm.maillog,vm.passlog);
		if(valido){
		setTimeout(function(){$location.path("/perfilusuario");});
		} else {
			setTimeout(function(){$location.path("/");});
		}
		
	}
	
	vm.logout = function(){
		gs.logout();
		$location.path("/perfilusuario");
		
	}
}