const Employee = require('../lib/Employee');

//if I want to us mock data
//jest.mock('../lib/Potion');

test('creates an Employee obejct', () => {
    const employee = new Employee('jobtitle');

    expect(employee.role == 'jobtitle');
    expect(employee).toHaveProperty('name');
    expect(employee).toHaveProperty('id');
    expect(employee).toHaveProperty('email');
});

test('sets the employee name to user input', () => {
    const employee = new Employee();

    this.name = employee.getName();

    return expect(this.name).resolves.toEqual(expect.objectContaining({
        name: expect.any(String)
    }));
});

test('sets the employee id to user input', () => {
    const employee = new Employee();

    this.id = employee.getId();

    return expect(this.id).resolves.toEqual(expect.objectContaining({
        empId: expect.any(Number)
    }));
});

test('sets the employee email to user input', () => {
    const employee = new Employee();

    this.email = employee.getEmail();

    return expect(this.email).resolves.toEqual(expect.objectContaining({
        email: expect.any(String)
    }));
});

test('sets the employee role to user selection', () => {
    const employee = new Employee();

    const role = employee.getRole();

    return expect(role).resolves.toEqual(expect.objectContaining({
        role: expect.any(Array)
    }));
});

