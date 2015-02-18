var Account = {
  name: "",
  balance: 0,
  withdraw: function(amount) {
    this.balance = (this.balance - amount);
  },
  deposit: function(amount) {
    this.balance = (this.balance + amount);
  }
};


$(function() {
  var account = 0;
  $("form#sign-up").submit(function(event){
    var moniker = $("input#moniker").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());
    var account = Object.create(Account);
    account.moniker = moniker;
    account.balance = initialDeposit;
    $(".balance").text(account.balance);
    $("input#moniker").val("");
    $("input#initialDeposit").val("");
    $(".balance").text(account.balance);

    $("form#transact").submit(function(event){
      $(".balance").empty();
      var credit = parseInt($("input#deposit").val()) || 0;
      var debit = parseInt($("input#withdraw").val()) || 0;
      account.withdraw(debit);
      account.deposit(credit);
      $(".balance").text(account.balance);
      $("input#deposit").val("");
      $("input#withdrawal").val("");
      event.preventDefault();
    })

    event.preventDefault();
  });



});
