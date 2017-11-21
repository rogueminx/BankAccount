//back end logic
var balance = [];

//user interface logic
$(document).ready(function() {
	$("form#input").submit(function(event) {
		event.preventDefault();
		var name = $("#name").val();
		var initialDeposit = parseInt($("#initial").val());
		var mainDeposit = parseInt($("#main").val());
		var withdrawal = parseInt($("#withdrawal").val());
		balance.push(name, initialDeposit, mainDeposit, withdrawal);
		console.log(balance);
	});

});
