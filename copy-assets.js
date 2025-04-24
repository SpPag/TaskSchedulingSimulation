// copy-css.js from the src folder to the dist folder
// require() is a built-in Node.js function used to import or load modules, JSON files, or other scripts
const fs = require("fs"); // fs stands for File System. It's a built-in Node.js module that allows you to interact with the file system, such as reading from, writing to, and copying files
const path = require("path"); // path is a built-in Node.js module that provides utilities for working with file and directory paths

// define the source and destination paths
// path.join() is a method from the path module in Node.js. It combines multiple path segments into a single path, taking care of any necessary separators (like / or \, depending on the operating system)
// __dirname is a special variable in Node.js that represents the directory of the current script
const srcPath = path.join(__dirname, "src");
const destPath = path.join(__dirname, "dist");
const assetsToCopy = ['styles.css', 'index.html'];

// check if the dist folder exists, if not create it
if (!fs.existsSync(destPath)) {
    fs.mkdirSync(destPath);
    console.log("✅ Created 'dist/' folder.");
}

// logging to help with debugging
// console.log("Source path:", srcPath);
// console.log("Destination path:", destPath);

// copy the files
assetsToCopy.forEach(file => {
  const srcFile = path.join(srcPath, file);
  const destFile = path.join(destPath, file);

  // copyFile() is a method from the fs module in Node.js. It copies a file from one location to another. The third argument is a callback function that is called when the copy is complete
  fs.copyFile(srcFile, destFile, (err) => {
    if (err) {
      console.error(`❌ Failed to copy ${file}:`, err);
    } else {
      console.log(`✅ ${file} copied to dist/`);
    }
  });
});