var challenge_3 = require("../challenge_3");
 
describe("The largest Prime Factor", function () {
  
  it("for 13195 should be 29", function () {
    var primeNumber = challenge_3.largestPrimeFactor(13195);
    expect(primeNumber).toBe(29);
  });

  // it("for 600851475143 should be 6857", function () {
  //   var primeNumber = challenge_3.largestPrimeFactor(600851475143);
  //   expect(primeNumber).toBe(6857);
  // });


});    