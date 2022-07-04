const Employee = require('../lib/Employee');

describe('Employee', () => {

    it("should make an object with name, id and email", () => {
    const newEmp = new Employee("anne", 1234, "test@test.com");
        expect(newEmp).toEqual({
            name: "anne",
            id: 1234,
            email: "test@test.com", 
            title: "Employee"
        });
    })

        
    it("can get the employee's name when running getName()?", () => {
        const newEmp = new Employee("anne", 1234, "test@test.com");
        expect(newEmp.getName()).toEqual("anne");
    });

    it("should get the employee's id when running getId()?", () => {
        const newEmp = new Employee("anne", 1234, "test@test.com");
        expect(newEmp.getId()).toEqual(1234);
    });

    it("should get the employee's name when running getEmail()?", () => {
        const newEmp = new Employee("anne", 1234, "test@test.com");
        expect(newEmp.getEmail()).toEqual("test@test.com");
    });
    it("should get the employee's title when running getTitle()?", () => {
        const newEmp = new Employee("anne", 1234, "test@test.com");
        expect(newEmp.getTitle()).toEqual("Employee");
    });

})