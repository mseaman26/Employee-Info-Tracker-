const Employee = require("../lib/Employee")

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super()
        this.name = name
        this.id = id
        this.email = email
        this.officeNumber = officeNumber
        this.emoji = "☕"
    }
}
Manager.prototype.getRole = function(){
    return "Manager"
}
module.exports = Manager