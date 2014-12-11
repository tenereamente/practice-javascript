var correct = 0;

var answer1 = prompt("Yes or No. Is Everyone in your house Employed?")
 if (answer1 === "yes") {
     correct += 1;
 }
 var answer2 = prompt("How many personal computers do you own?")
 if (answer2 === "one") {
    correct += 1;
 }

var answer3 = prompt("What is your home address?")
 if (answer3 === "street") {
     correct += 1;
 }

var answer4 = prompt("What is your annual salary?")
 if (answer4 === "nyob") {
     correct += 1;
 }

var answer5 = prompt("Are you typically home in the (a)Morning, (b)Afternoon, (c)Evening, or (d) All of the Above")
 if (answer5 === "d") {
     correct += 1;
 }

var answer6 = prompt("Do you have a hidden key, if so, Where?")
 if (answer6 ==="under the mat") {
     correct += 1;
 }

var answer7 = prompt("What is your Social Security Number?")
if (answer7 === "nyob") {
    correct += 1;
}

var answer8 = prompt("Do you have a life Insurance policy, (a) For How Much? (b) Who is the policy holder?")
 if (answer8 === "nyob") {
     correct += 1;
 }

var answer9 = prompt("What is your bank account number?")
 if (answer9 === "nyob") {
     correct += 1;
 }

var answer10 = prompt("Do you have any enemies, i.e; If you were to 'Dissapear', Who would be the prime suspects?")
 if (answer10 === "nyob") {
     correct += 1;
 }

document.write("<p><strong>Thank You</strong> For taking the time to answer this questionnare.</p>");

if (correct === 7) {
    document.write("<p> Thanks a <strong>Bunch!</strong></p>");
}  else if (correct >= 2) {
    document.write("<p>Im Impressed with how trusting you are!</p>");
} else {
    document.write("<p>You aren't very trusting are you?</p>")
}
        
     





//var correct = 0;
//
//// ask questions
//
//var answer1 = prompt("Do you like Wine?")
// if (answer1 === "yes") {
//    correct += 1;
//}
//var answer2 = prompt("What is your middle name?")  
//  if (answer2 === "whitaker") {
//      correct += 1;
//  }
//var answer3 = prompt("What is your Husband's Name?")
// if (answer3 ==="paul") {
//   correct += 1;
// }
//var answer4 = prompt("What is your last name?")
// if (answer4 === "fairman") {
//    correct += 1;
//}
//var answer5 = prompt("What color is the sky?")
// if (answer5 === "blue") {
//     correct += 1;
// }
//
//// output results
//document.write("<p>You got " + correct + " out of five questions correct!</p>");
//
//if (correct === 5) {
// document.write("<p><strong>You earned a Gold Crown!!!</strong></p>");
//} else if (correct >= 3) {
//    document.write("<p>Yay, you earned a silver crown!!!</p>");
//}
// else if (correct >= 1) {
//     document.write("<p>You Get a Bronze Crown!</p>");
// }
//  else {
//      document.write("<p>You get No Crown.....</p>")
//  }



//
//
//var correctGuess = false;
//
//var randomNumber = Math.floor(Math.random() * 10 ) + 1;
//
//var guess = prompt('I am thinking of a number between 1 and 10. What is it?');
//
//if (parseInt(guess) === randomNumber) { 
//    correctGuess = true;
//} else if (parseInt(guess) < randomNumber) {
//  
//    var guessMore = prompt('Try again. The number i am thinking is more than ' + guess);
//    if (parseInt(guessMore) === randomNumber) {
//        correctGuess = true;
//    }
//       } else if (parseInt(guess) > randomNumber) {
//     var guessLess = prompt('Try again. The number I am thinking is less then ' + guess);
//         if (parseInt(guessLess) === randomNumber) {
//             correctGuess = true;
//         }
//    }
//if (correctGuess) {
//    document.write('<h1><p>You guessed the number!</P></h1>');
//} else {
//       document.write('<p>Sorry. The number was ' + randomNumber + '</p>');
//}
    
    
    
//document.write('<p>You guessed the Number!</p>');
//} else {
//    document.write('<p>Sorry. The number was ' + randomNumber + '</p>')
//}