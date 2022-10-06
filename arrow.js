
// 1 
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

// 1 refactored code
  function double(arr){return arr.map((val)=> val*2)}


// 2
function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

// 2 refactored code
function squareAndFindEvens(numbers){
    let squares = numbers.map(num => num ** 2);
    let evens = squares.filter(square=>square % 2 === 0);
    return evens;
};
