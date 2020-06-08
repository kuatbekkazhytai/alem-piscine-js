    // const person = {
    //     name: 'Rick',
    //     age: 77,
    //     country: 'US',
    // };
    const clone1 = Object.assign({}, person);
    const clone2 = Object.assign({}, person);

    const samePerson = Object.create(person);

    person.age = person.age + 1;
    person.country = 'FR';