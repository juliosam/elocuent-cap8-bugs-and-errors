const ej1 = "Ejercicio 1";
const ej2 = "Ejercicio 2";
const jump = "  \n "

console.log(ej1);

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  for (;;) {
  try {return primitiveMultiply(a,b)}
    catch(e){if (!(e instanceof MultiplicatorUnitFailure)) throw e }
}}

console.log(reliableMultiply(8, 8));
// → 64


console.log(jump);
console.log(ej2);

const box = {
    locked: true,
    unlock() { this.locked = false; },
    lock() { this.locked = true;  },
    _content: [],
    get content() {
      if (this.locked) throw new Error("Locked!");
      return this._content;
    }
  };
  
  function withBoxUnlocked(body) {
    if (box.locked == false){return body()}
    box.unlock();
    try{ return body()}
    finally {
        console.log(box.content);
        box.lock();
    }
  }
  
  withBoxUnlocked(function() {
    box.content.push("gold piece");
  });
  
  try {
    withBoxUnlocked(function() {
      throw new Error("Pirates on the horizon! Abort!");
    });
  } catch (e) {
    console.log("Error raised: " + e);
  }
  console.log(box.locked);
  // → true
 box.unlock();

  console.log(box.locked);

box.lock();
console.log(box.locked);
