const mobile = {
    brand: 'Poco',
    price: 21000,
    color: 'white',
    selfie: '12mp',
    inNew: true
}

for(const prop in mobile){
    // console.log(prop)
    // console.log(mobile[prop])
}

const keys = Object.keys(mobile);
// console.log(keys);

for(const key of keys){
    console.log(key, ':',  mobile[key]);
}