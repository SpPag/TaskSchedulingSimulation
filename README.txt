Small script that simulates the following behavior:

	It needs to accept an input array of tasks to be executed (example: tasks = [[1, 5], [2, 15], [3, 8]]). The first value in each inner array is the taskID and the second the task's execution time.

	The program needs to examine the tasks array every 10ms.

	If any task has been in queue for at least 50ms, execute the one with the longest waiting time next.

	If no tasks have been in queue for at least 50ms, execute the one with the shortest execution time next (and generally order the tasks by execution time).

The index.html and styles.css files are there just to produce a more complete picture.

I'm keeping working copies of all index.html, styles.css and script.tsx files in the src folder.

They are copied to the dist folder (script.tsx is transpiled to script.js) for production.

The tsconfig.json file is as initially produced with "npx tsc --init", with two changes:
	- "rootDir": "./src" // sets the directory where the files to be transpiled are located
	- "outDir": "./dist" // sets the directory where the files to be transpiled are to be transpiled into
	
The package.json file is as initially produced with "npm init -y", with two scripts added to the "scripts" key:
	-	"build": "tsc && node copy-assets.js", // tsc transpiles any tsx files in the rootDir directory into the outDir one, while node copy-assets.js executes the copy-assets.js file that's located in the project's root directory. Executed with npm run build
    -	"watch": "tsc --watch" // transpiles any tsx files in the rootDir directory into the outDir one and tracks the tsx files. Whenever one is saved with changes, it's transpiled immediately. Executed with npm run watch

The copy-assets.js file creates the dist directory if it doesn't exist and copies the index.html and styles.css files from the src directory to the dist one, while logging relevant messages to the console