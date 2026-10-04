//PartB

//Problem-1 Deep Equal
function deepEqual(objA, objB) {
if( objA === objB) { return true}
  if( objA !== "object" || objB !== "object") {return false}
  if( objA === null || objB === null) { return false}
  const keysObjA = object.keys(a);
  const keysObjB = object.keys(b);
  if(keysObjA.lenght !== keysObjB) {return false}
  for( const key of keysObjA) { if( !deepEqual( a[key], ))}
  
  



  
}
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 2 } })) //true
console.log(deepEqual({ a: 1, b: { c: 2 } }, { a: 1, b: { c: 3 } })) //false
console.log(deepEqual({ a: 1}, { a: 1, b: 2}))                       //false

/*

//Problem-2 Object-Diff
function diffObjects(oldObj, newObj){




  
}
console.log(diffObjects(
  { name: "Ekundayo", role:"Engineer", country:"Nigeria" },
  { name: "Ekundayo", role:"Senior Engineer", city:"Kingstown" } ))
// { added: { city: "Kingstown" }, removed: { country:"Nigeria" }, changed: { role: { from:"Engineer", to:"Senior Engineer"}}}




//Problem-3 Deep-Freeze
function deepfreeze(obj){



  
}
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

/*

let school = {
  name:"Ekundayo", department:"Engineering", track:"FullStack Engineer"}
let key = prompt("what do you want to know about the user?", "department");
console.log([school[key]]) */