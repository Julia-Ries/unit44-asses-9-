const square = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
  ];


function unroll(squareArray) {
        var result = [];
          var goAround = function(arr) {
              if (arr.length == 0) {
                  return;
              }
      
              // right
              result = result.concat(arr.shift());
      
              // down
              for (var j=0; j < arr.length - 1; j++) {
                  result.push(arr[j].pop());
              }
             
      
              // bottom
              result = result.concat(arr.pop().reverse());
              
      
              // up
              for (var k=arr.length -1; k > 0; k--) {
                  result.push(arr[k].shift());
              }
      
              return goAround(arr);
          };
      
          goAround(squareArray);
      
          return result;
      };
    
      
    console.log(unroll(square));
 
  
  



module.exports = unroll;
