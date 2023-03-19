// Select all input elements of type "text" within the current question container using jQuery
var inputs = $(this.getQuestionContainer()).select('input[type="text"]');

// Loop through each input element and add the text " out of 100 XXX UPDATE WITH UNITS XXX." after it using jQuery's insert() method
for (var i = 0; i < inputs.length; i++) {
  var input = inputs[i];
  $(input).insert({after: ' out of 100 XXX UPDATE WITH UNITS XXX.'});
}

// Declare and initialize a variable to hold the final response value
var responseFinal = 0;

// Define a function that creates a grid of rows and columns based on the number of responses received
function makeRows(rows, cols, responseFinal) {
  // Clear the container element before creating the grid
  container.innerHTML = "";
  
  // Loop through each cell in the grid and set its background color based on the number of responses received
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = ("");
    if (c < responseFinal) {
    	cell.style.backgroundColor = "maroon";
    }
    container.appendChild(cell).className = "grid-item";
  };
};

// Select the text area input element using jQuery
var textarea = $(this.questionId).down('.InputText')

// Attach event listeners to the text area input element to capture user input
if (textarea.addEventListener) {
  // Add event listener for input events (all browsers except IE before version 9)
  textarea.addEventListener("input", OnInput, false);
  // Add event listener for textInput events (Google Chrome and Safari)
  textarea.addEventListener("textInput", OnTextInput, false);
  console.log("hi");
}

// Define a function to be executed when the user inputs text into the text area
function OnInput(event) {
  if (!isNaN($(this).value)) {
    // Update the final response value if the input is a number
    responseFinal = $(this).value;
  }
  // Call the makeRows() function to update the grid with the new response value
  makeRows(10, 10, responseFinal);
}

// Define a function to be executed when the user inputs text into the text area (Google Chrome and Safari)
function OnTextInput(event) {
  if (!isNaN($(this).value)) {
    // Update the final response value if the input is a number
    responseFinal = $(this).value;
  }
  // Call the makeRows() function to update the grid with the new response value
  makeRows(10, 10, responseFinal);
}

// Get the current question ID
var currentQuestionID = this.getQuestionInfo().QuestionID;

// Initialize the response text field to 0
var responseTextField = 0;

// Update the response text field if the final response value is a number
if (!isNaN(responseFinal)) {
  responseTextField = responseFinal;
}

// Select the container element using the DOM and clear its contents
const container = document.getElementById("container");
container.innerHTML = "";

// Call the makeRows() function with initial values to create the grid
makeRows(10, 10, 0);
