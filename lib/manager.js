const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.officeNumber = officeNumber;
        this.title = 'Manager';

        // create if didn't fill in office # and the error statement
    }
}

module.exports = Manager;