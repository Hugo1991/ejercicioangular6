angular.module("app").config(RouteConfig);

RouteConfig.$inject = [ '$routeProvider' ];

function RouteConfig($routeProvider) {

	$routeProvider.when('/', { templateUrl : "templates/principal.html" });
	$routeProvider.when('/registro', { templateUrl : "templates/registro.html" });
	$routeProvider.when('/usuario', { templateUrl : "templates/usuario.html" });
	$routeProvider.when('/citas', { templateUrl : "templates/citas.html" });
	$routeProvider.when('/post/:id', { templateUrl : "templates/post.html" });

}