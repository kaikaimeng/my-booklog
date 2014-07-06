(function($){

 	var response={};

    var start = function(){
    	var content=$('#content');
    	var posts = response.posts;
    	var html='';

    	posts.foreach(function(post){
    		html += '<h2>';
    		html += post.subject;
    		html += '</h2>'
    	});
    	content.html(html);
    };

    $.ajax({ 
    	datatype: 'jsonp',
    	crossDomain: true,
     	url:'http://booklog.io/1/post',
   		success: function(response){
  			response=data;
  			start();
   		}
    });
 

})($);

