const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const generatePage = require("./src/page-template.js");
const { writeFile, copyFile } = require('./utils/generate-site');
const {createMockArray} = require('./lib/mockarraynuh');
var writeTheFile = '';

function Input() {
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
                console.log(this.employees);
                this.addEmployee()
                .then((addEmpConfirm) => {
                    if (addEmpConfirm.confirmAdd) {
                        this.initApp();
                        writeTheFile = false;
                    }
                    else {
                        writeTheFile = true;
                        return generatePage(this.employees)
                    }
                })
                .then((pageHTML) => {
                    if (writeTheFile)
                    writeFile(pageHTML);
                })
            })
        })
    })
}

Input.prototype.initApp = function() {

    //these lines are mock to save prompt time
    const macarena = createMockArray();
    writeFile(generatePage(macarena));
}
 
    //end of mock

//     this.employee = new Employee('');
//     this.employee.getRole()
//     .then((answer) => {
//         this.employee.role = answer.role[0];
//         let role = this.employee.role;
//         if (role === 'Engineer') {
//             this.employee = new Engineer(role);
//             console.log(this.employee);
//             this.employee.getGithub()
//             .then((githubAns) => {
//                 this.employee.github = githubAns.github;
//                 this.sharedQuestions()
//             });
//         } else if (role === 'Intern') {
//             this.employee = new Intern(role);
//             this.employee.getSchool()
//             .then((schoolAns) => {
//                 this.employee.school = schoolAns.school;
//                 this.sharedQuestions()
//             });
//         } else if (role === 'Manager') {
//             this.employee = new Manager(role);
//             this.employee.getOfficeNumber()
//             .then((offNumAns) => {
//                 this.employee.officeNumber = offNumAns.officeNum;
//                 this.sharedQuestions()
//             });
//         } else {
//             console.log("this code should be unreachable, starting over");
//             this.initApp();
//         }
//     })
// };

module.exports = Input;



