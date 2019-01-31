export default {
  peoples: [],
  addPeople: function(name, surname, age) {
    this.peoples.push({
      name: name,
      surname: surname,
      age: age
    });
  },
  getData: function(id) {
    let sorted = [];

    for (let people of this.peoples) {
      if (!sorted.includes(people[id])) {
        sorted.push(people[id]);
      }
    }

    return sorted
  }
};