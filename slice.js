const address = 'Brahmanbaria';
const part = address.slice(2, 5);
// console.log(part);

const sentence = 'I am a good and hardworking person.';
// console.log(sentence.split(' '));

const friendlst = 'Ronny,tony,bony,jony,kony,mony,sony';
const friends = friendlst.split(',');
// console.log(friends)

const first = 'Nahin';
const last = 'Nuree';

// const fullName = first + ' ' + last;
const fullname = first.concat(' ').concat(last);
console.log(fullname);