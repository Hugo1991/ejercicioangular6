angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/usuario.html" });
	$routeProvider.when('/newpost', { templateUrl : "templates/newpost.html" });
	$routeProvider.when('/post/:id', { templateUrl : "templates/post.html" });
	$routeProvider.when('/registro', { templateUrl : "templates/registro.html" });
	$routeProvider.when('/listamedicos', { templateUrl : "templates/listamedicos.html" });
	$routeProvider.when('/postlist', { templateUrl : "templates/postlist.html" });
	$routeProvider.when('/formularioshospitalmedicos', { templateUrl : "templates/formularioshospitalmedicos.html" });
}