const Manager = require("../lib/Manager")

describe("Manager", () =>{
    it("should be an instance of an object when created", () => {
        const manager = new Manager()
        expect(typeof(manager)).toEqual("object")
    })
    it("should have the properties name, id, email, emoji (not an argument), and officeNumber", () => {

        const manager = new Manager("mike", 13, "mseaman26@gmail.com", 2)

        expect(manager.name).toEqual("mike")
        expect(manager.id).toEqual(13)
        expect(manager.email).toEqual("mseaman26@gmail.com")
        expect(manager.officeNumber).toEqual(2)
        expect(manager.emoji).toEqual("☕")
    })
    it("should have the following methods: getName(), getId(), getEmail(), getRole()", () =>{

        const manager = new Manager("david", 44, "david@david.com", 6)

        expect(manager.getName()).toEqual("david")
        expect(manager.getId()).toEqual(44)
        expect(manager.getEmail()).toEqual("david@david.com")
        expect(manager.getRole()).toEqual("Manager")
    })
})