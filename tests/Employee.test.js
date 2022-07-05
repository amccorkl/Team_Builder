const Employee = require("../lib/Employee");

describe("Employee", () => {
  test("should make an object with name, id and email", () => {
    const newEmp = new Employee("anne", 1234, "anne@test.com");
    expect(newEmp).toEqual({
      name: "anne",
      id: 1234,
      email: "anne@test.com",
      title: "Employee",
    });
  });

  test("can get the employee's name when running getName()?", () => {
    const newEmp = new Employee("anne", 1234, "anne@test.com");
    expect(newEmp.getName()).toEqual("anne");
  });

  test("should get the employee's id when running getId()?", () => {
    const newEmp = new Employee("anne", 1234, "anne@test.com");
    expect(newEmp.getId()).toEqual(1234);
  });

  test("should get the employee's name when running getEmail()?", () => {
    const newEmp = new Employee("anne", 1234, "anne@test.com");
    expect(newEmp.getEmail()).toEqual("anne@test.com");
  });

  test("should get the employee's title when running getTitle()?", () => {
    const newEmp = new Employee("anne", 1234, "anne@test.com");
    expect(newEmp.getTitle()).toEqual("Employee");
  });
});
