var scores = [24, 32, 17];
var arrayLength = scores.length;
var roundNumber = 0;
var msgFor = '';
var iFor;
var msgWhile = '';
var iWhile = 1;
var msgDoWhile = '';
var iDoWhile = 1;

// Loop through the items in the array
for (iFor = 0; iFor < arrayLength; iFor++) {
    
    // Arrays are zero based (so 0 is round 1)
    // Add 1 to the current round
    roundNumber = (iFor + 1);

    // Write the current round to message
    msgFor += 'Round ' + roundNumber + ': ';

    // Get the score from the scores array
    msgFor += scores[iFor] + '<br />';
}

document.getElementById('forLoop').innerHTML = msgFor;

// Using a while loop
while (iWhile < 10) {
    msgWhile += iWhile + ' x 5 = ' + (iWhile * 5) + '<br />';
    iWhile++
}

document.getElementById('whileLoop').innerHTML = msgWhile;

// Finally trying a doWhile loop, this loop is prefered in instances where you want the code block to run at least once no matter what
do {
    msgDoWhile += iDoWhile + ' x 5 = ' + (iDoWhile * 5) + '<br />';
    iDoWhile++;
} while (iDoWhile < 1);
// Even though iDoWhile is already set to 1 and no long < 1 the code block will still run

document.getElementById('doWhileLoop').innerHTML = msgDoWhile;