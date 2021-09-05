//Exercise 4 
//dd-mm-yy to yy-mm-dd

function switchDate (date) {
    var arr = date.split('-'); // Split numbers
    var newArr = []; 
    for (let i = 0; i < 3; i++) {
      newArr.push(arr.pop())}; // re-order array
    console.log(newArr.join("-")) // join back and print
  };
  
  switchDate("05-09-21");