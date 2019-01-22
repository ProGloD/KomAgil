export default {
  peoples: [],
  addPeople: function(name, surname, age) {
    this.peoples.push({
      name: name,
      surname: surname,
      age: age
    });
  },
};