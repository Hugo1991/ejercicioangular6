$(function(){
	var app_id='417957921710577';
	var scopes='email, user_friends, user_online_presence';
	var btn_login= '<a href="#" id="loginFB" class="btn btn-primary">iniciar sesion fb</a>';
	var div_session="";
	
	window.fbAsyncInit = function() {
	  	FB.init({
		    appId      : app_id,
		    cookie     : true,  
		    xfbml      : true, 
		    version    : 'v2.2'
	  	});
		FB.getLoginStatus(function(response) {
	    	statusChangeCallback(response,function(){
	    
	 		});
	 	});
	 }
	 var statusChangeCallback= function(response,callback) {
	    console.log(response);
	    if (response.status === 'connected') {
			getFacebookData();
	    } else {
	        callback(false);
	    }
  	}
  	var checkLoginState = function() {
	    FB.getLoginStatus(function(response) {
	      statusChangeCallback(response,function(){
	      	callback(data);
	      });
	    });
    }
    
    var getFacebookData() = function() 
    {
    	FB.api('/me',function(response) {
    		$('#loginFB').after(div_session);
    		$('#loginFB').remove();
    		$('#facebook-session strong').text(response.name);
    		$('#facebook-session img').attr('src','http://graph.facebook.com/'+response.id+'/picture?type=large');
    	})
    }
    var facebookLogin=function(){
    	checkLoginState(function(response){
    		if(!response){
    			console.log(response);
    			FB.login(function(response){
    				if(response.status==='connected')
    					getFacebookData();
    			},{scope:scopes});
    		}
    	})
    }
    
    
    $(document).on('click','loginFB',function(e){
    	e.preventDefault();
    	
    	facebookLogin();
    })
})