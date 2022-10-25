const Intern = require ("../lib/Intern")
//the tests for the Intern class.  Fortunately, the "it" functionality and the syntax of jest make it so I don't really need to add comments
describe("Intern", () => {
    it("should be an instance of an object when created", () => {
        const intern = new Intern()

        expect(typeof(intern)).toEqual("object")
    })
    it("should have the following properties: name, id, email, emoji(not an argument) and school", () => {
        const intern = new Intern("bill", 32, "bill@billy.com", "harvard")

        expect(intern.name).toEqual("bill")
        expect(intern.id).toEqual(32)
        expect(intern.email).toEqual("bill@billy.com")
        expect(intern.school).toEqual("harvard")
        expect(intern.emoji).toEqual("🎓")
    })
    it("should have the following methods: getName(), getId(), getEmail(), getSchool(), getRole()", () => {
        const intern = new Intern("mike", 44, "mike@mike.com", "MA")

        expect(intern.getName()).toEqual("mike")
        expect(intern.getId()).toEqual(44)
        expect(intern.getEmail()).toEqual("mike@mike.com")
        expect(intern.getSchool()).toEqual("MA")
        expect(intern.getRole()).toEqual("Intern")
    })
})