Employee Info Tracker

## Description

    This program allows the user to easily build an HTML page containing cards that show information about employees at a workplace.  The user is prompted by the command line interface to provide information about each employee and can continue adding employees until they choose to stop.  Once they stop, a file called "index.html" is generated in the "dist" directory, which can then be displayed in a browser.  There are three types of employees that can be added: Manager (only one), Engineer, and Intern.  

## Video Demo of the Project is at the following link:


## Technologies used
- JavaScript
- Node.JS
- Inquirer npm
- HTML
- CSS
- Jest testing

## Notable features
- This program features prompts from the inquirer npm tool. Information from the responses is stored as properties within objects.  The prompts can continue indefinitely until the user no longer wants to add any more.  This is an example of recursion
- An HTML file that is dynamically generated based off of the information provided by the user
## Notable Methods
- Test Driven Developement. The first code that was written for this project was the tests for our employee class and the subsequent subclasses.  The tests ensure that the creation, properties, and methods of these objects remains functional
- The usage of class constructors and subclasses. Usage of these methods is a great way to store data in a logical way that is easy to manipulate and work with
- 
## Code Snippets

Here are some of the prompts that get displayed in the command line by inquirer
```javascript
inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: "input",
      name: "description",
      message: "Provide a description of your project"
    },
    {

      type: "list",
      name: "license",
      message: "What license would you like to use for this project?",
      choices: ["Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause \"Simplified\" License", `BSD 3-Clause "New" or "Revised" License`, `Boost Software License 1.0`, `Creative Commons Zero v1.0 Universal`, `Eclipse Public License 1.0`, `GNU Affero General Public License v3.0`, `GNU General Public License v2.0`, `GNU Lesser General Public License v3.0`, `Mozilla Public License 2.0`, `The Unlicense` ]

    },
```

Here is a portion of the template literal that equates to the README content:
```javascript
  function generateReadme(data){

    return `# ${data.title}
  ## Description

    ${data.description}\n
  ${generateLicenseBadge(data)}

  ## Table of Contents

  * [Installation](#installation)<br />
  * [Usage](#usage)<br />
  * [Contributing to This Repository](#how-to-contribute-to-this-repository)<br />
  * [Tests](#to-run-tests-run-the-following-command)<br />
  * [Questions](#questions)<br />

  ## Installation

    To install the necessary dependancies, run the following command:

      ${data.installation}
```

## Learning points from this project
- An understanding of Node.JS and writing a program for the command line interface
- How to use template literals to conveniently concatenate data into a string
- Usage of npm commands and creating package.jason files
- An understanding of modularization of code

## -By Michael Seaman
