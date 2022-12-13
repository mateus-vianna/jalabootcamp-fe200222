// String:
const mstring = () => { 
    let stringDemo = "A string of text.";
    console.log('String:', stringDemo);
}


// Number:
const mnumber = () => {
    let integerDemo = 4;
    console.log('Integer:', typeof integerDemo);
}


//float
const mfloat = () => {
    let floatDemo = 5.6;
    console.log('Floating point number:', typeof floatDemo);
}


// Boolean:
const mboolean = () => {
    let booleanDemo = true;
    console.log('Boolean value:', booleanDemo);
}


// Null value (nothing):
const mnull = () => {
    let nullDemo = null;
    console.log('Null value:', nullDemo);
}




// Undefined:
const mundef = () => {

    let undefinedDemo;
    console.log('Undefined:', undefinedDemo);

    let undefinedAssignedDemo = undefined;
    console.log('Undefined assigned:', undefinedAssignedDemo);

}

// Object:
const objDemo = () => { 
    const objectDemo = {
        dance: 'Mambo',
        number: 5,
      };
      console.log('Object:', typeof objectDemo);
}


// Array:
const array = () => {
    const objectDemo = {
        dance: 'Mambo',
        number: 5,
      };
    const arrayDemo = ['tango', JSON.stringify(objectDemo), 'waltz', 'rumba', 1];
    console.log('Array:', arrayDemo);
}




const sum = () => {
    let a = 5;
    let b = '4';
    let c = 3.2;

    console.log(`let a: ${a} (${typeof a})`);
    console.log(`let b: ${b} (${typeof b})`);
    console.log(`let c: ${c} (${typeof c})`);

    let result = b + c;
    console.log(`let result: ${result} (${typeof result})`);
    console.log('Result: ', result);
}

const test = () => {
     console.log('%c%s', 'color: #ff8800', 'Test');
}

export {mstring, mnumber, mfloat, mboolean, mnull, mundef, objDemo, array, sum};
export default test;