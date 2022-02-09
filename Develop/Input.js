const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const Employee = require('./lib/Employee');


function Input() {
    this.count = 0;
    this.oneEmp=[];
    this.sharedArray=[];
    this.roleType;
    this.employee;
    this.employees=[];
};

Input.prototype.addEmployee = function() {

    return inquirer.prompt(
        {
            type:'confirm',
            name: 'confirmAdd',
            message: "Would you like to enter info for another employee?",
            default: false
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
    
}

Input.prototype.sharedQuestions = function() {
    this.employee.getName()
    .then((nameAns) => {
        this.employee.name = nameAns.name;
        this.employee.getId()
        .then((idAns) => {
            this.employee.id = idAns.empId;
            this.employee.getEmail()
            .then((emailAns) => {
                this.employee.email = emailAns.email;
                console.log(this.employee);
                this.employees.push(this.employee);
                this.addEmployee()
                .then((addEmpConfirm) => {
                    if (addEmpConfirm.confirmAdd) {
                        this.initApp();
                    }
                    else {
                        console.log('Engineer works');
                    }
                })   
            })
        })
    })
}


Input.prototype.initApp = function() {
    this.employee = new Employee();
    this.employee.getRole()
    .then((answer) => {
        this.roleType = answer.role[0];
        if (this.roleType === 'Engineer') {
            this.employee = new Engineer();
            this.employee.getGithub()
            .then((githubAns) => {
                this.employee.github = githubAns.github;
                this.sharedQuestions()
            });
        } else if (this.roleType === 'Intern') {
            this.employee = new Intern();
            this.employee.getSchool()
            .then((schoolAns) => {
                this.employee.school = schoolAns.school;
                this.sharedQuestions()
            });
        } else if (this.roleType === 'Manager') {
            console.log('this shouldnt be running');
        } else {
            console.log("this code should be unreachable, starting over");
            this.initApp();
        }
    })
};

module.exports = Input;



