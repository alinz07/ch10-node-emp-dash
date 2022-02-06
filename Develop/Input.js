const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');


function Input() {
    this.count = 0;
    this.inputArray=[];
    this.roleType;
};

Input.prototype.sharedQuestions = function() {
    inquirer.prompt([
        {
            type: 'number',
            name: 'empId',
            message: "Please enter the Employee's ID number",
            validate: nameInput => {
                //could be updated to include local length of phone # if diff than 10
                if (typeof nameInput=='number') {
                    return true;
                } else {
                    console.log("Please enter the Employee's ID number");
                    return false;
                }
            }
        },
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
    ])
    .then((answers) => {
        this.inputArray.push(answers);
        console.log(this.inputArray);
        if (this.count > 0) {
            inquirer.prompt([
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
                },
                {
                    type: 'checkbox',
                    name: 'role',
                    message: "please enter the employee's role (start with Manager)",
                    validate: nameInput => {
                        //could be updated to include local length of phone # if diff than 10
                        if (nameInput) {
                            return true;
                        } else {
                            console.log("Please enter the Employee's role");
                            return false;
                        }
                    }
                },
            ])
            .then((moreAnswers) => {
                this.inputArray.push(moreAnswers);
                console.log(this.inputArray);
                count+=1;
            })
        }
        else {

        }
    });
}

Input.prototype.initApp = function() {

    inquirer.prompt([
        {
            type: 'text',
            name: 'name',
            message: "Please enter the Team Manager's name",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the Manager's name");
                    return false;
                }
            }
        },
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
    .then((answers) => {
        this.inputArray.push(answers);
        console.log(this.inputArray);
        console.log(answers.officeNum);
        this.sharedQuestions();
    });
};



module.exports = Input;