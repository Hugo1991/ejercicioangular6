angular.module("app").controller("UserController", UserController);

UserController.$inject = ["blogManager", "$routeParams", "$location", "LxNotificationService"];

function UserController(blogManager, $routeParams, $location, LxNotificationService) {

	var um = this;
	
	//View model properties
	
	um.user = {};
		
	//Controller logic
	
	um.user = blogManager.getUser($routeParams.id);

	//Controller actions
	
	um.deleteUser = function(user) {
		
		LxNotificationService.confirm('Delete confirmation',
				'Are you sure you want to delete this post?', 
				{ cancel:'Cancel', ok:'Delete' }, 
				function(answer)
		        {
		            if(answer === true){
		            	blogManager.deleteUser(user);
		        		$location.path("/");		            	
		            }					
		        });
	};
};