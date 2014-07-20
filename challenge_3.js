exports.largestPrimeFactor = function(n){
  var primeNumber = 0;
  // do your work here

  //need to find largest prime factor of targetNumber
  
  //find factor for targetNumber
  for (var factorOfTargetNumber = targetNumber; factorOfTargetNumber > 0; factorOfTargetNumber--) {
    if (targetNumber % factorOfTargetNumber === 0 && factorOfTargetNumber != targetNumber) {
      // console.log("factorOfTargetNumber: " + factorOfTargetNumber); 
    }
      //check if factorOfTargetNumber is prime number    
      for (var k = 2; k < factorOfTargetNumber; k++) {
       // console.log('inside k: ' + k);
       console.log('this is factorOfTargetNumber ' + factorOfTargetNumber);
        for (var q = k; q >= 2; q--) {
          // console.log('inside q: '+q);
          //checks divisibility of number by 2, 3 and 5 and if no remainder
          if (k % q === 0 && q % 2 !== 0 && q % 3 !== 0 && q % 5 !== 0) {
          console.log("found? " + q + " : ");
          }
          //adds 2,3 and 5 to list of primes
          if (q === 2 || q === 3 || q === 5) {
          console.log(q);
          }
        }
      }
  }
};

  
// for (var k = 2; k < 20; k++) {
//        // console.log('inside k: ' + k);

//         for (var q = k; q >= 2; q--) {
//           // console.log('inside q: '+q);
//           if (k % q === 0 && q % 2 !== 0 && q % 3 !== 0 && q % 5 !== 0) {
//           console.log("found? " + q + " : ");
//           }
//           if (q === 2 || q === 3 || q === 5) {
//           console.log(q);
//           }
//         }
//       }
// };