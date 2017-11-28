//back end logic
function Account(name, balance) {
	this.name = name;
	this.balance = balance;
	this.newDeposit = [];
	this.newWithdrawal = [];
};

Account.prototype.Deposit = function() {
  return this.balance += this.newDeposit[0];
};

Account.prototype.Withdrawal = function() {
  return this.balance -= this.newWithdrawal[0];
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
			if (!isNaN(parseInt($("#main").val()))) {
				newAccount.newDeposit.unshift(parseInt($("#main").val()));
				newAccount.Deposit();
			};
			if (!isNaN(parseInt($("#withdrawal").val()))) {
				newAccount.newWithdrawal.unshift(parseInt($("#withdrawal").val()));
				newAccount.Withdrawal();
			};
			console.log(newAccount);


		});

		// var withdrawal = parseInt($("#withdrawal").val());
		console.log(newAccount);
	});

});
