//
// Object destructuring
//

// const person = {
//   name: 'Andriy',
//   age: 34,
//   location: {
//     city: 'Dnipro',
//     temp: -8
//   }
// };
//
// // const name = person.name;
// // const age = person.age;
//
// const {name: firstname = 'Anonymous', age} = person;
//
// console.log(`${firstname} is ${age}.`);
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It is ${temperature} in ${city}`);
// }

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    // name: 'Pengiun'
  }
};

const { name: publisherName = 'Self-Published' } = book.publisher;

console.log(publisherName);


//
// Array destructuring
//

const adress = ['1299 S Juper Street', 'Philadelphia', 'Pensilvania', '12147'];
const [, city, state = 'Dnipto'] = adress;
console.log(`You are in ${city} ${state}`);


const item = ['Coffee (hot)', '$2.00', '$3.50', '$3.75'];
const [itemName, , mediumPrice ] = item;
console.log(`A midium ${itemName} costs ${mediumPrice}`);





