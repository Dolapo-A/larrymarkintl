// src/index.js

// Example: Define a function to initialize your application
function initializeApp() {
	// Your initialization logic goes here

	// For example, you might manipulate the DOM directly
	const rootElement = document.getElementById("root");
	rootElement.innerHTML = "<h1>Hello, World!</h1>";
}

// Call the initialization function when the DOM is ready
document.addEventListener("DOMContentLoaded", initializeApp);
