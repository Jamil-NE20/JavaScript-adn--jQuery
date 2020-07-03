function filterByAge(minAge, nameA, ageA, nameB, ageB) {
  let firstPerson = {name: nameA, age: ageA};
  let secondPerson = {name: nameB, age: ageB};
  
    if (firstPerson.age >= minAge) {
      console.log(firstPerson);
    }

    if (secondPerson.age >= minAge) {
        console.log(secondPerson);
    }

  }
  filterByAge(12, 'Ivan', 15, 'Asen', 9);
    