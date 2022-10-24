const Employee = require("../lib/Employee")

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

module.exports = Engineer