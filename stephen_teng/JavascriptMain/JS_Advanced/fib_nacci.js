function fib() {
    // Some variables here
    var prevcount = 0
    var count = 1;
    function nacci() {
      // do something to those variables here
      temp = count;
      count += prevcount;
      prevcount = temp;
      console.log( prevcount);
    }
    return nacci
  }
  var fibCounter = fib();
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "1"
  fibCounter() // should console.log "2"
  fibCounter() // should console.log "3"
  fibCounter() // should console.log "5"
  fibCounter() // should console.log "8"