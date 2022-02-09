const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name='';
        this.id=0;
        this.email='';
    }

    getName() {
        return inquirer.prompt(
            {
                type: 'text',
                name: 'name',
                message: "Please enter the Employee's name",
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee's name");
                        return false;
                    }
                }
            } 
        )
    }

    getId() {
        return inquirer.prompt(
            {
                type: 'number',
                name: 'empId',
                message: "Please enter the Employee's ID number",
                validate: idInput => {
                    //could be updated to include local length of phone # if diff than 10
                    if (typeof idInput==='number') {
                        return true;
                    } else {
                        console.log("Please enter the Employee's ID number");
                        return false;
                    }
                }
            }
        )
    };

    getEmail() {
        return inquirer.prompt(
            {
                type: 'text',
                name: 'email',
                message: "Please enter the employee's email",
                validate: emailInput => {
                    //could be updated to include local length of phone # if diff than 10
                    if (emailInput.includes('@')) {
                        return true;
                    } else {
                        console.log("Please enter a valid email address");
                        return false;
                    }
                }
            }
        )
    };

    getRole() {
        return inquirer.prompt(
            {
                type: 'checkbox',
                name: 'role',
                message: "please enter the employee's role (first iteration should be Manager)",
                choices: ['Manager', 'Engineer', 'Intern'],
                validate: nameInput => {
                    //could be updated to include local length of phone # if diff than 10
                    if (nameInput) {
                        return true;
                    } else {
                        console.log("Please enter the Employee's role");
                        return false;
                    }
                }
            }
        )
    }
};

module.exports = Employee;