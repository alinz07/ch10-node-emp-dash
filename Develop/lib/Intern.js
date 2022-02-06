const Employee = require('./Employee');

class Intern extends Employee {
    constructor() {
        //call parent constructor here
        super();

        this.school = '';
    }

    getSchool() {

    }

    getRole() {

    }
};

module.exports = Intern