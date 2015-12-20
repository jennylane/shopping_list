$(document).ready(function() {
	$('.addbutton').click(function() {
	var userItem= '<div class="userItem">'+ $('input.addbox').val() +'</div>';
	$('.listcontainer').append(userItem);
	});
	});
