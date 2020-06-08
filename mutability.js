    const person = {
        age: 28,
        country: 'KZ'
    };
    const clone1 = Object.assign({}, person);
    const clone2 = Object.assign({}, person);

    const samePerson = person;
    person.age = 29;
    person.coutry = 'FR';