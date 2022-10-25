const Employee = require ("../lib/Employee")
//the tests for the Employee class.  Fortunately, the "it" functionality and the syntax of jest make it so I don't really need to add comments
describe("Employee", () => {
    it("should be an instance of an object when created", () =>{
        const employee = new Employee()
        expect(typeof(employee)).toBe("object")
    })
    it("should have three properties, name, id, and email", () => {
        const employee = new Employee("mike", 12, "mseaman26@gmail.com")

        expect(employee.name).toEqual("mike")
        expect(employee.id).toEqual(12)
        expect(employee.email).toEqual("mseaman26@gmail.com")
    })
    it("should have four methods: getName(), getId(), getEmail(), and getRole()", () => {
        const employee = new Employee("mike", 13, "derp@derp.com")

        expect(employee.getName()).toEqual("mike")
        expect(employee.getId()).toEqual(13)
        expect(employee.getEmail()).toEqual("derp@derp.com")
        expect(employee.getRole()).toEqual("Employee")
    })
})

