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

    mockArray.push(a,b,c);
    return mockArray;
}

module.exports = {createMockArray}