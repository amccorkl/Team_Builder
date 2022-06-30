const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.title = 'Intern';
        // need school check code and error code
    }
    
    getSchool() {
        return this.school;
    }
    getTitle() {
        return this.title;
    }
}

module.exports = Intern;