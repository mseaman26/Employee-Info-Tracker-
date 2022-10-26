Employee Info Tracker

## Description

    This program allows the user to easily build an HTML page containing cards that show information about employees at a workplace.  The user is prompted by the command line interface to provide information about each employee and can continue adding employees until they choose to stop.  Once they stop, a file called "index.html" is generated in the "dist" directory, which can then be displayed in a browser.  There are three types of employees that can be added: Manager (only one), Engineer, and Intern.  

## Video Demo of the Project is at the following link:
https://www.youtube.com/watch?v=wo_29xV_Kl4

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
- Test Driven Development. The first code that was written for this project consisted of the tests for our Employee class and the subsequent subclasses.  The tests ensure that the creation, properties, and methods of these objects remain functional
- The usage of class constructors and subclasses. Usage of these objects is a great way to store data in a logical way that is easy to manipulate and work with
- Importing and Exporting modules.  This practice of writing modular functions is a great way to maintain "separation of concerns" which means that code is separated into individual files and is thus more organized and more maintainable
- String literals that eventually render as HTML.  Within these string literals, function calls and object properties are called, allowing the HTML to be dynamic in accordance to user input
- Recursion. The prompts within this program can run indefinitely.  This is because the function to select the next employee to add can ultimately be called within itself.  Only when the user decides to stop adding Employees is the loop broken.  This was the only way I could figure out how to structure this aspect of the program
## Code Snippets
- Here is an example of some tests.  They pertain the the Engineer class, which is a subclass of Employee.  
```javascript
const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    it("should be an instance of an object when created", () => {
        const engineer = new Engineer()

        expect(typeof(engineer)).toEqual("object")
    })
    it("should have the following properties: name, id, email, emoji(not an argument), and github", () =>{
        const engineer = new Engineer("mike",23,"snuggles@soft.com", "snuggles")

        expect(engineer.name).toEqual("mike")
        expect(engineer.id).toEqual(23)
        expect(engineer.email).toEqual("snuggles@soft.com")
        expect(engineer.github).toEqual("snuggles")
        expect(engineer.emoji).toEqual("👓")
    })
    it("should have the following methods: getName(), getId(), getEmail(), getGithub(), and getRole()", () => {
        const engineer = new Engineer("charles", 66, "charlie@chocolatefactory.com", "gobstopper")

        expect(engineer.getName()).toEqual("charles")
        expect(engineer.getId()).toEqual(66)
        expect(engineer.getEmail()).toEqual("charlie@chocolatefactory.com")
        expect(engineer.getGithub()).toEqual("gobstopper")
        expect(engineer.getRole()).toEqual("Engineer")
    })
})
```
- Here we have the construction and exportation of the Engineer class, which is a subclass of Employee
```javascript
const Employee = require("../lib/Employee")
//sub class of Employee
class Engineer extends Employee{
    constructor(name, id, email, github){
        super()
        this.name = name
        this.id = id
        this.email = email
        this.github = github
        this.emoji = "👓"
    }
    
}
Engineer.prototype.getRole = function(){
    return "Engineer"
}
Engineer.prototype.getGithub = function(){
    return this.github
}
//exporting
module.exports = Engineer
```
- Here is an example of some HTML data with dynamic aspects to it. We are iterating through the array of created Employees and, with a switch statement, creating custom cards for each subclass of Employee
```javascript
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
```
## Key Learning points from this project
- This was my first experience with Test Driven Development.  I learned the value of it and look forward to using it more
- This was my first project involving classes and subclasses.  Another very useful tool
- Modularization and separation of concerns.  Keeping code organized by having modules in separate files that can be imported

## -By Michael Seaman

