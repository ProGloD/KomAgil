function groupBy(arr, func) {
  let obj = {};
  for (let i of arr) {
    let key = func(i);
    if (obj[key]) {
      obj[key].push(i);
    } else {
      obj[key] = [i];
    }
  }

  return obj;
}

module.exports = groupBy;