const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');


function Input() {
    this.count = 0;
    this.oneEmp=[];
    this.roleType;
    this.employees=[];
};

Input.prototype.addEmployee = function() {

    this.employees.push(this.oneEmp);
    console.log(this.employees);
    this.oneEmp = [];

    return inquirer.prompt([
        {
            type:'confirm',
            name: 'confirmAdd',
            message: "Would you like to enter info for another employee?",
            default: false
        }
    ]);
};

Input.prototype.roleCheck = function () {
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
};

Input.prototype.mgrQs = function () {

    return inquirer.prompt([
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
}    

Input.prototype.internQs = function() {
    inquirer.prompt({
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
    .then((internAns) => {
        oneEmp.push(internAns);
    })
}

Input.prototype.engineerQs = function() {
    inquirer.prompt({
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
    .then((engAns) => {
        oneEmp.push(engAns);
    })
}

Input.prototype.sharedQuestions = function() {

    console.log('shared qs running');

    this.roleCheck()
        .then((roleCheckData) => {
            this.oneEmp.push(roleCheckData.role[0]);
            this.roleType=roleCheckData.role[0];
        })
        .then(() => {
            switch(this.roleType) {
                case 'Engineer':
                    this.engineerQs();
                case 'Intern':
                    this.internQs();
                default: console.log('Manager specific questions already answered, moving to shared questions');
            }
        })
        .then(() => {
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
                    this.oneEmp.push(answers);
                    console.log(this.oneEmp);
            })
        });
        
    //         if (!this.role=='Manager') {
    //             inquirer.prompt([
    //                 {
    //                     type: 'text',
    //                     name: 'name',
    //                     message: "Please enter the Employee's name",
    //                     validate: nameInput => {
    //                         if (nameInput) {
    //                             return true;
    //                         } else {
    //                             console.log("Please enter the Employee's name");
    //                             return false;
    //                         }
    //                     }
    //                 } 
    //             ])
    //             .then((nameAnswer) => {
    //                 this.oneEmp.push(nameAnswer);
    //                 console.log(this.oneEmp);
    //             })
    //         }        
    //     })
    //     .then(this.addEmployee())
    //     .then((addEmpConfirm) => {
    //         if (addEmpConfirm) {
    //             this.sharedQuestions();
    //         }
    //         else {
    //             //pass this.infoArray into a page to generate html with template literal
    //             return
    //         }
    //     });
}

Input.prototype.initApp = function() {
    this.mgrQs()
        .then((mgrInfo) => {
            this.oneEmp.push(mgrInfo);
            this.sharedQuestions();
        });
};

module.exports = Input;