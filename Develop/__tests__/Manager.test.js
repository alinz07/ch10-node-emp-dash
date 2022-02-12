const Manager = require('../lib/Manager');

test('creates an Manager obejct', () => {
    const manager = new Manager('jobtitle');

    expect(manager.role == 'jobtitle');
    expect(manager).toHaveProperty('name');
    expect(manager).toHaveProperty('id');
    expect(manager).toHaveProperty('email');
    expect(manager).toHaveProperty('officeNumber');

});

test('sets the Manager name to user input', () => {
    const manager = new Manager();

    this.name = manager.getName();

    return expect(this.name).resolves.toEqual(expect.objectContaining({
        name: expect.any(String)
    }));
});

test('sets the Manager id to user input', () => {
    const manager = new Manager();

    this.id = manager.getId();

    return expect(this.id).resolves.toEqual(expect.objectContaining({
        empId: expect.any(Number)
    }));
});

test('sets the Manager email to user input', () => {
    const manager = new Manager();

    this.email = manager.getEmail();

    return expect(this.email).resolves.toEqual(expect.objectContaining({
        email: expect.any(String)
    }));
});

test('sets the Manager officeNumber property to user input', () => {
    const manager = new Manager();

    const offNum = manager.getOfficeNumber();

    return expect(offNum).resolves.toEqual(expect.objectContaining({
        officeNum: expect.any(Number)
    }));
});

test('sets the Manager role to user selection', () => {
    const manager = new Manager();

    const role = manager.getRole();

    return expect(role).resolves.toEqual(expect.objectContaining({
        role: expect.any(Array)
    }));
});