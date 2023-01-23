var EStatus;
(function (EStatus) {
    EStatus["adopted"] = "Adopted";
    EStatus["selled"] = "Selled";
    EStatus["reserverd"] = "Reserved";
})(EStatus || (EStatus = {}));
let birth;
const getBirtDate = (dog) => {
    if (typeof dog.birth === 'number')
        return new Date(dog.birth);
    else if (typeof dog.birth === 'string')
        return new Date(dog.birth);
    else
        return dog.birth;
};
const contact = {
    contactId: 1,
    contactName: 'Name',
    phone: '12321312321'
};
const shiro = {
    id: 1,
    contactId: 1,
    age: 12,
    name: 'Oaisdai',
    contactName: 'Osdois',
    phone: '12312321-231311',
    birth: new Date('2002-01-02'),
    owner: 'Pedro',
    status: "adopted",
    address: null,
    contactAddress: null
};
const field = "name";
let pupu = {
    id: 12,
    age: 12,
    birth: new Date('2000-01-01'),
    name: 'Pupu',
    owner: 'Rafael',
    status: "selled"
};
const getValue = (source, prop) => {
    return source[prop];
};
// console.log(getValue(pupu, field))
// console.log(getValue(contact, 'contactName'))
// console.log(getValue({ a: 12, b: 'dasidajsi', c: true }, 'b'))
const getAllValues = (source, func) => {
    for (const [key, value] of Object.entries(source)) {
        console.log(`Key: ${key} and Value:  ${value}`);
    }
};
// let x: any = { name: ' Jackie Chan' }
// x = 32
// x = true
// x = () => console.log('weather')
let x = { name: 'Jackie Chan', id: 12, status: true };
let y;
y[1] = "hshfisdufi";
y[2] = 12312;
y[34] = true;
