# project-runner
###  A command with 'nodemon' like functions, which tracks any changes done in the project directory and restarts the program if any changes detected.

## Built With
  *   JavaScript, Node.js
  
###  In-built Libraries Used:-
* [fs](https://nodejs.org/api/fs.html)  =  API for interacting with the file system.
* [child_process](https://nodejs.org/api/child_process.html)  =  Use to start sub-processes.

###  3rd-Party Libraries Used:-
* [chalk](https://www.npmjs.com/package/chalk)  =  Used for styling terminal strings.
* [chokidar](https://www.npmjs.com/package/chokidar)  =  Used for watching changes in Project Directory.
* [caporal](https://www.npmjs.com/package/caporal)  =  Used for building Command-Line Applications.
* [lodash.debounce](https://www.npmjs.com/package/lodash.debounce)  =  Used to generate Debounce Function.

#### Follow below steps for using "watchit" command in your local machine:-
 
##### 1) Execute below command in terminal to download the dependencies:-
        npm install
##### 2) Execute below command in terminal [Required only on MAC, for granting permission to run the file as executable].
        chmod +x index.js
##### 3) Execute in terminal(as an admin) after going inside the project directory [This is used to link our project to make it available         globally everywhere else.] :
        npm link
    
#### Now you can run "watchit" command in your terminal for detecting any changes that occurs in Project directory and then restart the Process if any changes are detected.

### Below are some screenshots of executing this command in Terminal:
#### "Executing 'watchit' command :-
![Demo Images](/screenshots/demo1.PNG?raw=true)

