// Select all input elements of type "text" within the current question container using jQuery
var inputs = $(this.getQuestionContainer()).select('input[type="text"]');

// Loop through each input element and add the text " dollars per month" after it using jQuery's insert() method
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  $(input).insert({after: ' dollars per month'});
}
