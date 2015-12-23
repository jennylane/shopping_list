$(document).ready(function() {
	
//click Add button adds textbox value to the right and clears textbox
	$('.addbutton').click(function() {
		var userItem= '<div class="userItem">'+ $('input.addbox').val() +'</div>';
		$('.listcontainer').append(userItem);
		$('.addbox').val('')
	});

//click a div inside of .listcontainer toggles strike class
	$('.listcontainer').on('click', 'div', function() {
  		$(this).toggleClass('strike');
	});

//click the delete text removes strike through items from DOM
	$('.delete').click(function() {
		$('.strike').remove();
	});

//click delete all text removes all userItem
	$('.deleteAll').click(function() {
		$('.userItem').remove();
		});
});
