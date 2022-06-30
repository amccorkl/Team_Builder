class Employee {
   //constructor function
    constructor(name, id, email, position) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.title = "Employee";
        this.position = position;

        // need an if didn't fill in code and error code here

    }

    

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