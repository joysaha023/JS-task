const sentence = 'This is a revers sentance';

let revers = ''
for(const letter of sentence){
    // console.log(letter);
    revers = letter + revers;
}
console.log(revers);