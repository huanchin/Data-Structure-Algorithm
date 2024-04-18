class HashTable {
  constructor(size) {
    this.size = size;
    this.table = [];
    for (let i = 0; i < size; i++) {
      this.table.push([]);
    }
  }

  // parse string to integer
  parse(str) {
    let result = 0;
    for (let i = 0; i < str.length; i++) {
      result += str.charCodeAt(i);
    }
    return result % this.size;
  }

  // division method
  hashDiv(key) {
    return key % this.size;
  }

  // multiplication method
  hashMul(key) {
    let parsedKey = 0;
    if (typeof key !== "number") {
      parsedKey = this.parse(key);
    } else {
      parsedKey = key;
    }

    const A = (Math.sqrt(5) - 1) / 2;
    return Math.floor(this.size * ((parsedKey * A) % 1));
  }

  set(key, value) {
    const index = this.hashMul(key);
    this.table[index].push({ key, value });
  }

  get(key) {
    const index = this.hashMul(key);
    for (let i = 0; i < this.table[index].length; i++) {
      if (this.table[index][i].key === key) return this.table[index][i];
    }
    return null;
  }

  printAll() {
    console.log(this.table);
  }
}

const myHashTable = new HashTable(6);

// myHashTable.set(11424, "Mike");
// myHashTable.set(6254, "James");
// myHashTable.set(4171, "Drake");
// myHashTable.set(554, "Kevin");

myHashTable.set("white", "#FFFFFF");
myHashTable.set("red", "#FF0000");
myHashTable.set("magenta", "#FF00FF");

myHashTable.printAll();
console.log(myHashTable.get("red"));

// console.log(myHashTable.get(11424));
