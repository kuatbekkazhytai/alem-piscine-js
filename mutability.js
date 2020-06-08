    // const person = {
    //     name: 'Rick',
    //     age: 77,
    //     country: 'US',
    // };
    const clone1 = Object.assign({}, person);
    const clone2 = Object.assign({}, person);

    var samePerson = new Object();
    samePerson.name = person.name;
    samePerson.age = person.age;
    samePerson.country = person.country;

    person.age = person.age + 1;
    person.country = 'FR';