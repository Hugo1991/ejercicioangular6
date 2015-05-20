angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/principal.html" });
	$routeProvider.when('/registro', { templateUrl : "templates/registro.html" });
	$routeProvider.when('/creacita', { templateUrl : "templates/concertaCita.html" });

	$routeProvider.when('/listamedicos', { templateUrl : "templates/listamedicos.html" });
	$routeProvider.when('/listacitas', { templateUrl : "templates/listacitas.html" });
	$routeProvider.when('/listaHospitales', { templateUrl : "templates/listaHospitales.html" });
	$routeProvider.when('/postlist', { templateUrl : "templates/postlist.html" });
	$routeProvider.when('/formularioshospitalmedicos', { templateUrl : "templates/formularioshospitalmedicos.html" });
	
	$routeProvider.when('/listausuarios', { templateUrl : "templates/listausuarios.html" });
	
	$routeProvider.when('/usuario/:id', { templateUrl : "templates/usuario.html" });
	$routeProvider.when('/cita/:id', { templateUrl : "templates/cita.html" });
	$routeProvider.when('/post/:id', { templateUrl : "templates/post.html" });
	$routeProvider.when('/medico/:id', { templateUrl : "templates/medico.html" });
	$routeProvider.when('/hospital/:id', { templateUrl : "templates/hospital.html" });
	
	$routeProvider.when('/paneladmin', { templateUrl : "templates/paneladmin.html" });


}