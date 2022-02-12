const Engineer = require('../lib/Engineer');

test('creates an Engineer obejct', () => {
    const engineer = new Engineer('jobtitle');

    expect(engineer.role == 'jobtitle');
    expect(engineer).toHaveProperty('name');
    expect(engineer).toHaveProperty('id');
    expect(engineer).toHaveProperty('email');
    expect(engineer).toHaveProperty('github');

});

test('sets the Engineer name to user input', () => {
    const engineer = new Engineer();

    this.name = engineer.getName();

    return expect(this.name).resolves.toEqual(expect.objectContaining({
        name: expect.any(String)
    }));
});

test('sets the Engineer id to user input', () => {
    const engineer = new Engineer();

    this.id = engineer.getId();

    return expect(this.id).resolves.toEqual(expect.objectContaining({
        empId: expect.any(Number)
    }));
});

test('sets the Engineer email to user input', () => {
    const engineer = new Engineer();

    this.email = engineer.getEmail();

    return expect(this.email).resolves.toEqual(expect.objectContaining({
        email: expect.any(String)
    }));
});

test('sets the Engineer github property to user input', () => {
    const engineer = new Engineer();

    const github = engineer.getGithub();

    return expect(github).resolves.toEqual(expect.objectContaining({
        github: expect.any(String)
    }));
});

test('sets the Engineer role to user selection', () => {
    const engineer = new Engineer();

    const role = engineer.getRole();

    return expect(role).resolves.toEqual(expect.objectContaining({
        role: expect.any(Array)
    }));
});
