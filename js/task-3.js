console.log("task-3");
class StringBuilder{
    #value;
    constructor(initialValue) {
        this.#value = initialValue;
      }
    getValue(){
        return this.#value;
    }
    padEnd(end){
        this.#value=`${this.#value}${end}`;
    }
    padStart(start){
        this.#value=`${start}${this.#value}`;   
     }
    padBoth(both){
        this.padStart(both);
        this.padEnd(both);

    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
