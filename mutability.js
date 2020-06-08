    const person = {
        name: 'Rick',
        age: 77,
        country: 'US',
    };
    const clone1 = Object.assign({}, person);
    const clone2 = Object.assign({}, person);

    const samePerson = {
        name: 'Rick',
        age: 77,
        country: 'US',
    };
    person.age = 78;
    person.country = 'FR';