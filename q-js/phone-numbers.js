// Get the ID of the current question
var questId = this.questionId;

// Create a new <script> element and set its onload function
var script = document.createElement('script');
script.onload = function () {
  // Once the script has loaded, initialize a new instance of the Cleave library
  // to format the input element for this question's QR code
  new Cleave('.QR-' + questId, {
    numericOnly: true,
    blocks: [0, 3, 0, 3, 4],
    delimiters: ["(", ")", " ", "-"]
  });
};

// Set the source of the script element to the Cleave library hosted on GitHub
script.src = "//nosir.github.io/cleave.js/dist/cleave.min.js";

// Add the script element to the document's <head>
document.head.appendChild(script);
