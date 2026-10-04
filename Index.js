//PartB

//Problem-1 Deep Equal


function deepEqual(objA, objB) {
  
if( objA === objB ) 
{ return true; }
  // checking equality of parameter
  
  
  if( typeof objA !== "object" || typeof objB !== "object") {
    return false }
        // checking equality of object of parameters
    
  
  let keysA = object.keys(objA); // getting the keys of both objects
  let keysB = object.keys(objB);
  
  if( keysA.lenght !== keysB.lenght )
  { return false }         // comparing length of keys
  
  
  for( let key of keysA ) 
  if(!deepEqual(objA[key], objB[key])) { return false } // carry out recursion
  
}



console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) //true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) //false
console.log(deepEqual({ a: 1}, { a: 1, b: 2}))                       //false






//Problem-2 Object-Diff

    function diffObjects(oldObj, newObj) {
    const diff = {
        added: {},
        removed: {},
        changed: {}
    };

    // Find added properties to object
    for (const key in newObj) {
        if (!(key in oldObj)) {
            diff.added[key] = newObj[key]; }  }

    // Find removed and changed properties of object
    for (const key in oldObj) {
        if (!(key in newObj)) {
            diff.removed[key] = oldObj[key];
        } else if (oldObj[key] !== newObj[key]) {
            diff.changed[key] = {
                from: oldObj[key],
                to: newObj[key]   }; } }

    return diff;
}

console.log(diffObjects(
  { name: "Setemi", role:"Engineer", country:"Nigeria" },
  { name: "Setemi", role:"Senior Engineer", city:"Kingstown" } ))
// { added: { city: "Kingstown" }, removed: { country:"Nigeria" }, changed: { role: { from:"Engineer", to:"Senior Engineer"}}}




//Problem-3 Deep-Freeze

function deepFreeze(obj) {
    for (const key of Object.keys(obj)) {
        if (typeof obj[key] === "object" && obj[key] !== null) {
            deepFreeze(obj[key]);}  }

    Object.freeze(obj);

    return obj;}

const config = deepFreeze()


const config= deepfreeze({ api: { baseUrl: "https://x.com", retries: 3}, debug: false })
config.api.baseUrl = "https://changed.com"  //Should be ignored
config.debug = true                         //Should be ignored
console.log(config.api.baseUrl, config.debug) // "https://x.com" false
console.log(object.isFrozen(config.api))      // true




//Problem-4 Private Counter Factory
function createCounter() {




  
}
const counter = createCounter()
counter.increment()
counter.increment()
counter.decrement()
console.log(counter.value)   // 1
console.log(counter.count)   // undefined - not directly accessible




//Problem-5 Schema Validator
function validateSchma( obj, schema ){






  
}
const schema = { name:"string", age:"number", isAdmin:"boolean" }
console.log(validateSchema({ name:"Ade", age: 25, isAdmin:"false" }, schema))  //[]
console.log(validateSchema({ name:"Ade", age: 25 }, schema)) //[ `age: expected number, got string, isAdmin: missing property`]
