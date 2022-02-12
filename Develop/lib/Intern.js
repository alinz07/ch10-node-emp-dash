const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(role) {
        //call parent constructor here
        super(role);

        this.school = '';
    }

    getSchool() {
        return inquirer.prompt({
            type: 'text',
            name: 'school',
            message: 'Which school does the person attend?',
            validate: schoolInput => {
                //could be updated to include local length of phone # if diff than 10
                if (schoolInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's role");
                    return false;
                }
            }
        })
    }
};

module.exports = Intern