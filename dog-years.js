var object = {
    earth : 1.0,
    mercury  : 0.2408467,
    venus  : 0.61519726,
    mars  : 1.8808158,
    jupiter  : 11.862615,
    saturn  : 29.447498,
    uranus  : 84.016846,
    neptune : 164.79132
};

const dogYears = (name, age) => parseFloat((age * 7 / name / 31557600).toFixed([2]));
// console.log(dogYears(object.earth, 1000000000));
