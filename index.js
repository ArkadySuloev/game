 var player = 'player'

 $(document).ready(function(){
  	$('.cont').mouseenter(function(){
  		$(this).css({'border-color':"blue"});
  	});
  	$('.cont').mouseleave(function(){
  		$(this).css({'border-color':"black"});
  	});
 	$('.cont').click(function(){
 		if($(this).css ('background-image') == 'none'){
 			 		if(player == 'player' ){
  			$(this).css({'background-image': 'url(player.jpg)'});
  			player = 'ai' ;
  		} else {
 		 	$(this).css({'background-image': 'url(ai.jpg)'});
  			player = 'player' ;
  		}

 		}

 		
 	});
 });
  		
  	

  