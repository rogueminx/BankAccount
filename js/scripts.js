//back end logic
function Account(name, balance) {
	this.name = name;
	this.balance = balance;
};

Account.prototype.deposit = function() {

};

//user interface logic
$(document).ready(function() {
	$("form#setup").submit(function(event) {
		event.preventDefault();
		var inputtedName = $("#name").val();
		var initialDeposit = parseInt($("#initial").val());
		var newAccount = new Account(inputtedName, initialDeposit);
		// var mainDeposit = parseInt($("#main").val());
		// var withdrawal = parseInt($("#withdrawal").val());
		// balance.push(name, initialDeposit, mainDeposit, withdrawal);
		console.log(newAccount);
	});

});
