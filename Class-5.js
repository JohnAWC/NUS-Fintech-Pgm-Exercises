
// User to input spending pattern
var entertainmentSpend = 600; //entertainment spend
var eatoutSpend = 150; //eating out spend
var transportSpend = 300; //transport spend


if (entertainmentSpend > 500) {
  console.log("Entertainment spend exceeds 500, what are you doing?!")
} else if (entertainmentSpend > 300) {
  if (eatoutSpend > 250) {
    console.log("Entertainment spend exceeds 300 and eating-out spend exceeds 250!")
  } 
    else if (transportSpend > 400) { 
    console.log("Entertainment spend exceeds 300 and transport spend exceeds 400!")
    }
  else {
    console.log("Good job! You are within budget!")
  }}
