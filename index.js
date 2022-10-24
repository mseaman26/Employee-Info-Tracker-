const inquirer = require("inquirer")
const fs = require('fs')

const Manager = require("./lib/Manager")
const Engineer = require("./lib/Engineer")
const Intern = require("./lib/Intern")
const { type } = require("os")

const employees = []
let doneAddingEmployees = false

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
                    console.log(employees)
                    // generate html file here
                    fs.writeFile("./dist/index.html", `${generateHTMLPage()}`, (err) =>{
                        err ? console.log(err): console.log("HTML generated")
                    })
                    return
                case "Engineer":
                    addEngineer()
                    return
                case "Intern":
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
                message: "What is your engineer's ID number?"
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
        employees.push(engineer)
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
                message: "What is your intern's ID number?"
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
        employees.push(intern)
        selectEmployeeType()
    })
}
function generateHTMLPage(){
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
    let cardString = ""
    for (let i = 0; i < employeeArray.length; i++){
        switch(employeeArray[i].getRole()){
            case "Manager":
                cardString +=
                    `<div class="employee-card">
                    <div class="employee-banner">${employeeArray[i].name}<br>${employeeArray[i].emoji} ${employeeArray[i].getRole()}</div>
                    <div class="employee-info">
                        <div class="employee-info-box">ID: ${employeeArray[i].id}</div>
                        <div class="employee-info-box"><a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></div>
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
                            <div class="employee-info-box"><a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></div>
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
                            <div class="employee-info-box"><a href="mailto:${employeeArray[i].email}">${employeeArray[i].email}</a></div>
                            <div class="employee-info-box">School: ${employeeArray[i].school}</div>
                        </div>
                    </div>`
                break
        }
    }
    return cardString
    
}

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
            message: "What is your manager's ID number?"
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
    employees.push(manager)
    console.log(employees)
    console.log(manager.emoji)
    selectEmployeeType()
})

// 


// fs.writeFile("index.html", "hello world", (err) =>{
//     err ? console.log(err): console.log("HTML generated")
// })