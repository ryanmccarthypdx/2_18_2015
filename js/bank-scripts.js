var Account = {
  moniker: "",
  balance: 0,
  withdraw: function(amount) {
    this.balance = (parseInt(this.balance) - amount).toFixed(2);
  },
  deposit: function(amount) {
    this.balance = (parseInt(this.balance) + amount).toFixed(2);
  }
};


$(function() {
  var alerted = false;
  var vladimired = false;
  var nikoed = false;
  $("#balance").hide();
  $("#image").html("<img class='pic' src='img/bg.jpg'>");
  var account = 0;
  $("form#sign-up").submit(function(event){
    alerted = false;
    vladimired = false;
    $("#image").empty();
    var moniker = $("input#moniker").val();
    var initialDeposit = parseInt($("input#initialDeposit").val());
    var account = Object.create(Account);
    account.moniker = moniker;
    account.balance = initialDeposit;
    $("input#moniker").val("");
    $("input#initialDeposit").val("");
    $(".balance").text(account.balance);
    $("#balance").show();
    $("#image").html("<img class='pic' src='img/banker.jpg'>");


    $("form#transact").submit(function(event){
      event.preventDefault();
      $(".balance").empty();
      var credit = parseInt($("input#deposit").val()) || 0;
      var debit = parseInt($("input#withdraw").val()) || 0;
      account.withdraw(debit);
      account.deposit(credit);
      if (vladimired === false) {
        alert("All transaction is subjekt to $29.95 transakticle fee(s) You no like? Vladimir visit you later")
        vladimired = true
      }
      account.withdraw(29.95);
      $(".balance").text(account.balance);
      $("#balance").show();
      $("input#deposit").val("");
      $("input#withdraw").val("");
    });

    setInterval(function() {
      account.withdraw(Math.abs(parseInt(account.balance)) * 0.049);
      if (account.balance < 0) {
        if (nikoed === false) {
          alert("You are overdrawn! This is bad, my friend: Niko is very upset, I give him $500 to calm him down")
          nikoed = true
        }
        account.withdraw(500);
      }
      if (alerted === false) {
        alert("All akount is subjeck to 4.9% minutely APRs")
        alerted = true;
      }
      $(".balance").text(account.balance);
    }, 6000);

    event.preventDefault();
  });
});
