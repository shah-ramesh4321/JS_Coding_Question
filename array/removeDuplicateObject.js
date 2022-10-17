/*
How it works:
Array.filter() removes all duplicate objects by checking if the previously mapped id-array includes the current id ({id} destructs the object into only its id). To only filter out actual duplicates, it is using Array.includes()'s second parameter fromIndex with index + 1 which will ignore the current object and all previous.

Since every iteration of the filter callback method will only search the array beginning at the current index + 1, this also dramatically reduces the runtime because only objects not previously filtered get checked.

This obviously also works for any other key that is not called id, multiple or even all keys.
*/
// Method 1
const arr1 = [
  { id: 1, name: "one" },
  { id: 2, name: "two" },
  { id: 1, name: "one" },
];
const ids = arr1.map((o) => o.id); //[ 1, 2, 1 ]
const filtered = arr1.filter(({ id }, index) => !ids.includes(id, index + 1));

// console.log(filtered);

// let people = [
//     { name: "George", lastname: "GeorgeLast", age: 12 },
//     { name: "George", lastname: "GeorgeLast", age: 13 },
//     { name: "Bob", lastname: "GeorgeLast", age: 12 }
//   ]
  
//   let result = people.filter(
//     (person, index) => index === people.findIndex(
//       other => person.name === other.name
//         && person.lastname === other.lastname
//     ));
//   console.log(result);

const arr = [
    {name: "George", lastname: "GeorgeLast", age: 12},
    {name: "George", lastname: "GeorgeLast", age: 13},
    {name: "Bob", lastname: "GeorgeLast", age: 12}
  ];
  
  const obj = {}
  arr.forEach(v => {
    if (!obj[v.name]) {
      obj[v.name] = {}
    }
    if (!obj[v.name][v.lastname]) {
      obj[v.name][v.lastname] = v;
    }
  })
  
  const result = [];
  Object.values(obj).forEach(nameObj =>
    Object.values(nameObj).forEach(surnObj => result.push(surnObj))
  );
  
  console.log(result)
