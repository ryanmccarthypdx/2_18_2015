describe("Pig", function() {
  describe("hold", function() {
    it("adds the current turn score to the total score and changes the turn.", function() {
      var testPig = Object.create(Pig);
      testPig.roundScore = 90;
      testPig.hold();
      expect(testPig.scores[0]).to.equal(90);
      expect(testPig.turn).to.equal(1);
    });
  });
  describe("roll", function() {
    it("adds consecutive rolls to the current roundscore", function(){
      var testPig = Object.create(Pig);
      var roll1 = testPig.roll().pips;
      var roll2 = testPig.roll();
      expect(testPig.scores[0]).to.equal(90);
    });
  });
});
