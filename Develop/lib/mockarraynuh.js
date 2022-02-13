const Manager = require('./Manager');
const Engineer = require('./Engineer');
const Intern = require('./Intern');

const createMockArray = function() {
    mockArray = [];

    const a = new Manager('Manager');
    a.name = 'Tony';
    a.id=123;
    a.email='tony@gmail.com';
    a.officeNumber=2623054411;

    const b = new Engineer('Engineer');
    b.name = 'Anthony';
    b.id=456;
    b.email='Anthony@gmail.com';
    b.github='alinz07';

    const c = new Intern('Intern');
    c.name = 'Charlie';
    c.id=789;
    c.email='Charlie@gmail.com';
    c.school='Madison';

    const d = new Intern('Intern');
    d.name = 'Santa';
    d.id=987;
    d.email='Santa@gmail.com';
    d.school='Harvard';

    const e = new Intern('Intern');
    e.name = 'Nick';
    e.id=654;
    e.email='Nick@gmail.com';
    e.school='Milwaukee';

    mockArray.push(a,b,c,d,e);
    return mockArray;
}

module.exports = {createMockArray}