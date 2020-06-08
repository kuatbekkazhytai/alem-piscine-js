    const person = {
        name: 'Rick',
        age: 77,
        country: 'US',
    };
    const clone1 = Object.assign({}, person);
    const clone2 = Object.assign({}, person);

    const samePerson = JSON.parse(JSON.stringify(person));

    person.age = person.age + 1;
    person.country = 'FR';