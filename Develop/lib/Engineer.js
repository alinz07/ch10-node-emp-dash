const Employee = require('./Employee');

class Engineer extends Employee {
    constructor() {
        //call parent constructor here
        super();

        this.github = '';
    }

    getGithub() {

    }

    getRole() {

    }
};

module.exports = Engineer;