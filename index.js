// Write your code here!
// 1. Remove the 'main' element from the DOM
const main = document.getElementById('main');
if (main) {
  main.remove(); // Remove the 'main' element from the DOM
}

// 2. Create a new <h1> element
const newHeader = document.createElement('h1');

// 3. Set the id of the new header to 'victory'
newHeader.id = 'victory';

// 4. Set the text content of the new header
// Replace "YOUR-NAME" with your actual name
newHeader.textContent = 'John Doe is the champion'; // Replace 'John Doe' with your name

// 5. Append the new header to the body or any other desired parent element
document.body.appendChild(newHeader);

