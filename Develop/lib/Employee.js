const inquirer = require("inquirer");

class Employee {
    constructor() {
        this.name = '';
        //validate answer that it isn't already in the list
        this.id = 1;
        this.email = '';
    }

    getName() {
        inquirer.prompt({
            type: 'text',
            name: 'name',
            message: "What is the person's name?",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter their name');
                    return false;
                }
            }
        })
        .then(({name}) => {
            //this.name=name;
            return name;
        })
    }

    // getId() {
        
    // }
    // getEmail() {

    // }
    // getRole() {
    //     //returns Employee
    // }
};

module.exports = Employee;