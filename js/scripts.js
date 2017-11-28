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
		newAccount = new Account(inputtedName, initialDeposit);

		$("form#addsub").submit(function(event) {
			event.preventDefault();
		var deposit = parseInt($("#main").val());
		var withdrawal = parseInt($("#withdrawal").val());

			if (!isNaN(deposit)) {
				newAccount.newDeposit.unshift(deposit);
				newAccount.Deposit();
				$(".returnedDeposits").prepend("<li>" + newAccount.newDeposit[0] + "</li>");
			};
			if (!isNaN(withdrawal)) {
				newAccount.newWithdrawal.unshift(withdrawal);
				newAccount.Withdrawal();
				$(".returnedWithdrawals").prepend("<li>" + newAccount.newWithdrawal[0] + "</li>");
			};
			console.log(newAccount);
			$("#returnedBalance").text("$" + newAccount.balance + ".00");


		});

		$("#returnedName").text(newAccount.name);
		$("#returnedBalance").text("$" + newAccount.balance + ".00");
		console.log(newAccount);
	});

});
