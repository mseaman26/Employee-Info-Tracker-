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