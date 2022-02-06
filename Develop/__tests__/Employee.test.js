const Employee = require('../lib/Employee');

//if I want to us mock data
//jest.mock('../lib/Potion');

test('creates an Employee obejct', () => {
    const employee = new Employee();

    expect(employee.name).toBe('');
    expect(employee.id).toBe(1);
    expect(employee.email).toBe('');
});

test('sets the employee object name to user input', () => {
    const employee = new Employee();

    empName=employee.getName()

    .then(expect(empName).toBe(expect.any(String)));
});