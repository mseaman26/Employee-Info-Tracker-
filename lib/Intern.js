const Employee = require("../lib/Employee")

class Intern extends Employee{
    constructor(name, id, email, school){
        super()
        this.name = name
        this.id = id
        this.email = email
        this.school = school
        this.emoji = "🎓"
    }
}
Intern.prototype.getSchool = function() {
    return this.school
}
Intern.prototype.getRole = function() {
    return "Intern"
}
module.exports = Intern