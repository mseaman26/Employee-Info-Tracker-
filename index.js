//importing out class modules
const inquirer = require("inquirer")
const fs = require('fs')

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
//I don't know what this variable is or how it got there.  I didn't work with a tutor, so it seems like it was generated somehow(?)
const { type } = require("os")
//this array is ultimately going to contain all of our employee objects
const employees = []
//this variable may not ultimately be necessary, but I left it in because the program is working and I don't want to change that
let doneAddingEmployees = false
//this function gets called after every employee is added.  It also allows the user to top adding employees and thus call the fs.writeFile function
function selectEmployeeType(){
    if(doneAddingEmployees == false){
        inquirer
        .prompt
        ([
            {
                type: "list",
                name: "employeeType",
                message: "Which type of employee would you like to add?",
                choices: ["Engineer", "Intern", "I don't want to add any more employees"]

            }
        ])
        .then((data) => {
            switch(data.employeeType){
                case "I don't want to add any more employees":
                    doneAddingEmployees = true
                    // generate html file here
                    fs.writeFile("./dist/index.html", `${generateHTMLPage()}`, (err) =>{
                        err ? console.log(err): console.log("HTML generated")
                    })
                    return
                case "Engineer":
                    //function call for adding engineer
                    addEngineer()
                    return
                case "Intern":
                    //function call for adding intern
                    addIntern()
                    return
            }
        })
    }
    
    
}

function addEngineer(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is your engineer's name?"
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is your engineer's ID number?",
                validate: async (input) => {
                    if(isNumeric(input)){
                        return true
                    }
                    else{
                        return "ID must be a number"
                    }
                 }
                
            },
            {
                type: "input",
                name: "engineerEmail",
                message: "What is your engineer's email?"
            },
            {
                type: "input",
                name: "engineerGithub",
                message: "What is your engineer's Github username?"
            }
        ])
    .then((data) =>{
        const engineer = new Engineer(data.engineerName, data.engineerId, data.engineerEmail, data.engineerGithub)
        //adding the newly created Engineer to the "employees" array
        employees.push(engineer)
        //on to selecting the next employee
        selectEmployeeType()
    })
}
function addIntern(){
    inquirer
        .prompt([
            {
                type: "input",
                name: "internName",
                message: "What is your intern's name?"
            },
            {
                type: "input",
                name: "internId",
                message: "What is your intern's ID number?",
                validate: async (input) => {
                    if(isNumeric(input)){
                        return true
                    }
                    else{
                        return "ID must be a number"
                    }
                 }
            },
            {
                type: "input",
                name: "internEmail",
                message: "What is your intern's email?"
            },
            {
                type: "input",
                name: "internSchool",
                message: "What is your intern's school?"
            }
        ])
    .then((data) =>{
        const intern = new Intern(data.internName, data.internId, data.internEmail, data.internSchool)
        //adding this intern to the employees array
        employees.push(intern)
        //on to selecting next employee
        selectEmployeeType()
    })
}
function generateHTMLPage(){
    //I haven't figured out how to add comments into the middle of a string literal, but notice the function call of "generateCards" that is within the HTML
    return`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Employee Info Tracker</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
    </head>
    <body>
        <div id="top-banner">My Team</div>
        <main class="container"> 
            <div id="card-holder">
            ${generateCards(employees)}
            </div>
    </main>
</body>
</html>`
}
function generateCards(employeeArray){
    //this function iterates through the employees array and, with the switch statement below, adds the necessary HTML to display a card with each employees info.  The "getRole()" method is what we use to assess which type of employee each one is
    let cardString = ""
    for (let i = 0; i < employeeArray.length; i++){
        switch(employeeArray[i].getRole()){
            case "Manager":
                cardString +=
                    `<div class="employee-card">
                    <div class="employee-banner">${employeeArray[i].name}<br>${employeeArray[i].emoji} ${employeeArray[i].getRole()}</div>
                    <div class="employee-info">
                        <div class="employee-info-box">ID: ${employeeArray[i].id}</div>
                        <div class="employee-info-box">Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></div>
                        <div class="employee-info-box">Office number: ${employeeArray[i].officeNumber}</div>
                    </div>
                </div>`
                break
            case "Engineer":
                cardString +=
                    `<div class="employee-card">
                        <div class="employee-banner">${employeeArray[i].name}<br>${employeeArray[i].emoji} ${employeeArray[i].getRole()}</div>
                        <div class="employee-info">
                            <div class="employee-info-box">ID: ${employeeArray[i].id}</div>
                            <div class="employee-info-box">Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></div>
                            <div class="employee-info-box">GitHub: <a href="https://github.com/${employeeArray[i].github}" target="_blank">${employeeArray[i].github}</a></div>
                        </div>
                    </div>`
                break
            case "Intern":
                cardString +=
                `<div class="employee-card">
                        <div class="employee-banner">${employeeArray[i].name}<br>${employeeArray[i].emoji} ${employeeArray[i].getRole()}</div>
                        <div class="employee-info">
                            <div class="employee-info-box">ID: ${employeeArray[i].id}</div>
                            <div class="employee-info-box">Email: <a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></div>
                            <div class="employee-info-box">School: ${employeeArray[i].school}</div>
                        </div>
                    </div>`
                break
        }
    }
    return cardString
    
}
function isNumeric(str) {//I googled this function to help validate numerical input from the user.  I couldn't figure it out on my own
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
  }
//this is the opening code of the program.  It is where we create the manager (there is always a manager and the manager will always be first).  I could have put this code inside of a function, but didn't
inquirer
    .prompt([
        {
            type: "input",
            name: "managerName",
            message: "What is your manager's name?"
        },
        {
            type: "input",
            name: "managerId",
            message: "What is your manager's ID number?",
            validate: async (input) => {
                if(isNumeric(input)){
                    return true
                }
                else{
                    return "ID must be a number"
                }
             }
        },
        {
            type: "input",
            name: "managerEmail",
            message: "What is your manager's email??"
        },
        {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is your manager's office number?"
        }

])
.then((data) => {
    const manager = new Manager(data.managerName, data.managerId, data.managerEmail, data.managerOfficeNumber)
    //manager is added to employees array(and is always at index 0)
    employees.push(manager)
    //select next employee
    selectEmployeeType()
})
