angular.module("app").controller("UserController", UserController);

UserController.$inject = ["blogManager", "$routeParams", "$location", "LxNotificationService"];

function UserController(blogManager, $routeParams, $location, LxNotificationService) {

	var vm = this;
	
	//View model properties
	
	vm.user = {};
		
	//Controller logic
	
	vm.user = blogManager.getUser($routeParams.id);

	//Controller actions
	
	vm.deleteUser = function(user) {
		
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