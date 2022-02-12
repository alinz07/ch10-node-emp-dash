const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(role) {
        //call parent constructor here
        super(role);

        this.github = '';
    }

    getGithub() {
        return inquirer.prompt({
            type: 'text',
            name: 'github',
            message: 'What is their GitHub username?',
            validate: gitInput => {
                //could be updated to include local length of phone # if diff than 10
                if (gitInput) {
                    return true;
                } else {
                    console.log("Please enter the Employee's role");
                    return false;
                }
            }
        })
    }
};

module.exports = Engineer;