const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generatePage = require("./src/page-template.js");

function Input() {
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
                this.employees.push(this.employee);
                this.addEmployee()
                .then((addEmpConfirm) => {
                    if (addEmpConfirm.confirmAdd) {
                        this.initApp();
                    }
                    else {
                        generatePage(this.employees);
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
            this.employee = new Manager();
            this.employee.getOfficeNumber()
            .then((offNumAns) => {
                this.employee.officeNumber = offNumAns.officeNum;
                this.sharedQuestions()
            });
        } else {
            console.log("this code should be unreachable, starting over");
            this.initApp();
        }
    })
};

module.exports = Input;



