// Must update QIDXXX to your question id number

// Compare two numbers and determine the larger and smaller values
if (a > b) {
  var bg = a;  // the larger value
  var sm = b;  // the smaller value
} else {
  var bg = b;  // the larger value
  var sm = a;  // the smaller value
}

// Iterate through a range of numbers from 1 to 1,000,000
for (var i = 1; i < 1000000; i++) {
  var d = sm / i;         // Calculate the divisor (the number we are dividing by)
  var res = bg / d;       // Calculate the quotient (the results of dividing the larger value by the divisor)
  var howClose = Math.abs(res - res.toFixed(0));  // Determine how close the quotient is to the closest whole number

  // Check if the quotient is within the given tolerance level
  if (howClose < tolerance) {
    if (a > b) {
      // Return the ratio as a string if a is larger than b
      return res.toFixed(0) + ':' + i;
    } else {
      // Return the inverse ratio as a string if b is larger than a
      return i + ' in ' + res.toFixed(0);
    }
  }
}

// Attach a function to the event handler for when the question with the given ID changes
jQuery("#"+this.questionId).change(function() {
  var percentage =parseInt(jQuery("#QIDXXX input.ResultsInput").val(),10);  // Get the value of the input element with the given ID - UPDATE TO YOUR QUESTION
  var value = getRatio(percentage , 100 , 0.01) ;   // Calculate the ratio using a custom function
  if (percentage==parseInt(0) ) { 
    // If the percentage is equal to zero, set the value to "0 in 100"
    var value = "0 in 100" ; 
  }
  Qualtrics.SurveyEngine.setEmbeddedData( 'proportion', value );  // Set a new value for the embedded data with the given name
});
