const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor() {
        super();

        this.officeNumber = '';
    }
    getOfficeNumber() {
        return inquirer.prompt([
            {
                type: 'number',
                name: 'officeNum',
                message: "Please enter the Team Manager's 10-digit phone number with no spaces/dashes",
                validate: numInput => {
                    //could be updated to include local length of phone # if diff than 10
                    if (numInput.toString().length==10 && typeof numInput=='number') {
                        return true;
                    } else {
                        console.log("Please re-enter the 10-digit phone number");
                        return false;
                    }
                }
            }
        ])
    }
}

module.exports = Manager