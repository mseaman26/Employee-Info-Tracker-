const Employee = require("../lib/Employee")
//sub class of employee
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
//exporting
module.exports = Manager