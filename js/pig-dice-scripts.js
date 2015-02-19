var Pig = {
  scores: [0,0],
  roundScore: 0,
  turn: 0,
  pips: 0,
  hold: function() {
    this.scores[this.turn] = (this.scores[this.turn] + this.roundScore);
    this.roundScore = 0;
    this.turn = ((this.turn + 3) % 2);
  },
  roll: function() {
    this.pips = (Math.floor(Math.random() * 6) + 1);
    if (this.pips === 1) {
      this.roundScore = 0;
      this.turn = ((this.turn + 3) % 2);
    } else {
      this.roundScore = (this.roundScore + pips);
    }
  }
};

$(function() {
  var game = Object.create(Pig);

  if (game.scores[0] >= 100) {
    alert("Player 1 Wins!");
  } else if (game.scores[1] >= 100) {
    alert("Player 2 Wins!");
  } else {
    $("#roll").click(function(){
      game.roll();
      $("#player1Score").text(game.scores[0]);
      $("#player2Score").text(game.scores[1]);
      $("#roundScore").text(game.roundScore);
      $("#pips").text(game.pips);
    });
    $("#hold").click(function(){
      game.hold();
      $("#player1Score").text(game.scores[0]);
      $("#player2Score").text(game.scores[1]);
      $("#roundScore").text(game.roundScore);
      $("#pips").text(game.pips);
    });
    $("#player1Score").text(game.scores[0]);
    $("#player2Score").text(game.scores[1]);
    $("#roundScore").text(game.roundScore);
    $("#pips").text(game.pips);

    if (game.turn === 0) {
      $("#player1").removeClass("inactive-player");
      $("#player2").addClass("inactive-player");
    } else {
      $("#player1").addClass("inactive-player");
      $("#player2").removeClass("inactive-player");
    }
  };
  event.preventDefault;
});
