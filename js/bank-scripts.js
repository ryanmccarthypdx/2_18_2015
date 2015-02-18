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
  $("#image").html("<img class='pic' src='img/bg.jpg'>");
  var account = 0;
  $("form#sign-up").submit(function(event){
    $("#image").empty();
    var moniker = $("input#moniker").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());
    var account = Object.create(Account);
    account.moniker = moniker;
    account.balance = initialDeposit;
    $("input#moniker").val("");
    $("input#initialDeposit").val("");
    $(".balance").text(account.balance);
    $("#image").html("<img class='pic' src='img/banker.jpg'>");


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
