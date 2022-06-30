const Employee = require('../lib/Employee');

test("can make an object?", () => {
    const emp = new Employee("name", "id", "email");
    expect(typeof(emp)).toBe("object");
})

test("can set name?", () => {
    const emp = new Employee("name", "id", "email");
    expect(emp.name).toBe("name");
})

test("can get name?", () => {
    const emp = new Employee("name", "id", "email");
    expect(emp.getName()).toBe("name");
})