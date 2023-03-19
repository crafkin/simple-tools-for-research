// Sets the inner HTML of the DOM element with id 'score' to the result of a function call with parameter QIDREF.
jQuery("#score").html(text);

// Binds a change event listener to the DOM element with the same id as the current question, which updates the 'score' element with a new result every time it is triggered.
jQuery("#"+this.questionId).change(function() {
var text = randomfunction(QIDREF);
jQuery("#score").html(text);
});



