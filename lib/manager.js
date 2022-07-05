const Employee = require('./Employee');

//creates the additional manager arguments
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
        this.title = 'Manager';

        // create if didn't fill in office # and the error statement
    }
    getOfficeNumber() {
        return this.officeNumber;
    }
    getTitle() {
        return this.title;
    }
}

module.exports = Manager;