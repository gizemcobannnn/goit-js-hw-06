console.log("task-2");
class Storage{
    #items
    constructor(items){
        this.#items=items;
    }
    getItems(){
        return this.#items;
    }
    addItem(newitem){
        this.#items.push(newitem);
    }
    removeItem(itemToRemove) {
        this.#items = this.#items.filter((item) => item !== itemToRemove);
      }
    }
 


const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
