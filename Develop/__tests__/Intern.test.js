const Intern = require('../lib/Intern');

test('creates an Intern obejct', () => {
    const intern = new Intern();

    expect(intern).toHaveProperty('name');
    expect(intern).toHaveProperty('id');
    expect(intern).toHaveProperty('email');
    expect(intern).toHaveProperty('school');

});

test('sets the Intern name to user input', () => {
    const intern = new Intern();

    this.name = intern.getName();

    return expect(this.name).resolves.toEqual(expect.objectContaining({
        name: expect.any(String)
    }));
});

test('sets the Intern id to user input', () => {
    const intern = new Intern();

    this.id = intern.getId();

    return expect(this.id).resolves.toEqual(expect.objectContaining({
        empId: expect.any(Number)
    }));
});

test('sets the Intern email to user input', () => {
    const intern = new Intern();

    this.email = intern.getEmail();

    return expect(this.email).resolves.toEqual(expect.objectContaining({
        email: expect.any(String)
    }));
});

test('sets the Intern school property to user input', () => {
    const intern = new Intern();

    const school = intern.getSchool();

    return expect(school).resolves.toEqual(expect.objectContaining({
        school: expect.any(String)
    }));
});

test('sets the Intern role to user selection', () => {
    const intern = new Intern();

    const role = intern.getRole();

    return expect(role).resolves.toEqual(expect.objectContaining({
        role: expect.any(Array)
    }));
});
