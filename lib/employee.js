class Employee {
   //constructor function
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
        

    }

    //allow the parent constructor to be called multiple times
    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getTitle() {
        return this.title;
    }
}

module.exports = Employee;