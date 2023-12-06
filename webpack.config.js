// webpack.config.js
const path = require("path");

module.exports = {
	mode: "development", // or 'production'
	entry: "./src/index.js", // Adjust this based on your project structure
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"), // Output directory, adjust as needed
	},
};
