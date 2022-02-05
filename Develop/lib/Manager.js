const Employee = require('./Employee');

class Manager extends Employee {
    constructor() {
        super();

        this.officeNumber = 123;
    }

    getRole() {

    }
}