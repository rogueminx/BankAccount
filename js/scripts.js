//back end logic
function Account(name, balance) {
	this.name = name;
	this.balance = balance;
};

//user interface logic
$(document).ready(function() {
	$("form#setup").submit(function(event) {
		event.preventDefault();
		var inputtedName = $("#name").val();
		var initialDeposit = parseInt($("#initial").val());
		var newAccount = new Account(inputtedName, initialDeposit);

		$("form#addsub").submit(function(event) {
			event.preventDefault();
			var deposit = parseInt($("#main").val());
			// console.log(deposit);

			var newBalance = newAccount.balance + deposit;
			console.log(newBalance);

		});

		// var withdrawal = parseInt($("#withdrawal").val());
		console.log(newAccount);
	});

});
