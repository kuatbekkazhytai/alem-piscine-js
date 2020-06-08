    // const person = {
    //     name: 'Rick',
    //     age: 77,
    //     country: 'US',
    // };
    const clone1 = {...person}
    const clone2 = {...person}
    let samePerson = Object.assign(person)
    samePerson.age += 1
    samePerson.country = 'FR'