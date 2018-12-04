
$('ul').on("click", "li", function() {
 this.remove();
});


var toDoItem = $("#inputField").val();


$('#buttonOne').click(function() {
	$('ul').first().append('<li>' + $("#inputField").val() + '</li>');
	$("#inputField").val('');
});


$('input').keypress(function() {
	var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			$('ul').first().append('<li>' + $("#inputField").val() + '</li>');
			$("#inputField").val('');	
		}
});

$('#button2').click(function() {
	$('ul').first().append('<li>SERENITY NOW!!!</li>');
});




