// // Part 1:

// const adventurer = {
//   name: "Robin",
//   health: 10,
//   inventory: ["sword", "potion", "artifact"],
//   companion: {
//     name: "Leo",
//     type: "Cat",
//     companion: {
//       name: "Frank",
//       type: "Flea",
//       belongings: ["small hat", "sunglasses"],
//     },
//   },
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   },
// };

// adventurer.inventory[0];

// adventurer.roll();

// // Part 2:

// class Character {
//   constructor(name) {
//     this.name = name;
//     this.health = 100;
//     this.inventory = [];
//   }
//   roll(mod = 0) {
//     const result = Math.floor(Math.random() * 20) + 1 + mod;
//     console.log(`${this.name} rolled a ${result}.`);
//   }
//   // Add Companions - This too
//   addCompanion(friend) {
//     this.companion.name = friend.name;
//     this.companion.type = friend.type;
//     this.companion.companion = friend.companion;
//   }
// }

// let robin = new Character("Robin");
// robin.inventory = ["sword", "potion", "artifact"];
// robin.companion = new Character("Leo");
// robin.companion.type = "Cat";
// robin.companion.companion = new Character("Frank");
// robin.companion.companion.type = "Flea";
// robin.companion.companion.inventory = ["small hat", "sunglasses"];

// // Part 3

// class Adventurer extends Character {
//   constructor(name, role) {
//     super(name);
//     // Adventurers have specialized roles.
//     this.role = role;
//     // Every adventurer starts with a bed and 50 gold coins.
//     this.inventory.push("bedroll", "50 gold coins");
//     // Companion List
//     this.companion = {};
//   }
//   // Adventurers have the ability to scout ahead of time.
//   scout() {
//     console.log(`${this.name} is scouting ahead...`);
//     super.roll();
//   }
//   // Add new items to inventory
//   addInventory(...items) {
//     items = items.flat();
//     items.forEach((item) => {
//       if (typeof item === "string") {
//         this.inventory.push(item);
//       }
//     });
//   }
// }

// class Companion extends Character {
//   constructor(name, type) {
//     super(name);

//     this.type = type;

//     this.belongings = [];

//     this.companion = {};
//   }
//   // Add Belongings
//   addBelongings(...belongings) {
//     belongings = belongings.flat();
//     belongings.forEach((belonging) => {
//       if (typeof belonging === "string") {
//         this.belongings.push(belonging);
//       }
//     });
//   }
// }

// robin = new Adventurer("Robin", "Adventurer");
// robin.addInventory(["sword", "potion", "artifact"]);
// let leo = new Companion("Leo", "Cat");
// let frank = new Companion("Frank", "Flea");
// frank.addBelongings(["small hat", "sunglasses"]);
// leo.addCompanion(frank);
// robin.addCompanion(leo);

// console.log(robin);
// console.log(leo);
// console.log(frank);

// Part 4:

class Character {
  static MAX_HEALTH = 100;

  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }
}

class Adventurer extends Character {
  static ROLES = ["Fighter", "Healer", "Wizard"];
  companion = { name: "", type: "" };
  constructor(name, health, role) {
    super(name);
    // Check if the provided role is valid
    if (!Adventurer.isValidRole(role)) {
      throw new Error("Invalid role for adventurer");
    }
    // Adventurers have specialized roles.
    this.role = role;
    // Every adventurer starts with a bed and 50 gold coins.
    this.inventory.push("bedroll", "50 gold coins");
  }

  // Method to check if a role is valid
  static isValidRole(role) {
    return Adventurer.ROLES.includes(role);
  }

  // Adventurers have the ability to scout ahead of them.
  scout() {
    console.log(`${this.name} is scouting ahead...`);
    super.roll();
  }
  //   Method to set the companion
  //   set companion(newCompanion) {
  //     this.companion.name = newCompanion.name;
  //     this.companion.type = newCompanion.type;
  //     this.companion.companion = newCompanion.companion;
  //   }
  set companion(newCompanion) {
    if (
      newCompanion instanceof Companion ||
      newCompanion === null ||
      newCompanion === undefined
    ) {
      this.companion = newCompanion;
    } else {
      throw new Error("Invalid companion object");
    }
  }
  addToInventoryArray(...items) {
    items = items.flat();
    items.forEach((item) => {
      if (typeof item === "string") {
        this.inventory.push(item);
      }
    });
  }
}

class Companion {
  #name;
  #type;
  #belongings = [];
  #companion = { name: "", type: "" };
  constructor(name, type) {
    this.#name = name;
    this.#type = type;
    this.#belongings = [];
    this.#companion = { name: "", type: "" };
  }
  addToBelongingsArray(...accessories) {
    accessories = accessories.flat();
    accessories.forEach((accessory) => {
      this.#belongings.push(accessory);
    });
    this.#belongings.push;
  }
  set companion(newCompanion) {
    if (
      newCompanion instanceof Companion ||
      newCompanion === null ||
      newCompanion === undefined
    ) {
      this.#companion = newCompanion;
    } else {
      throw new Error("Invalid companion object");
    }
  }
}

const robin = new Adventurer("Robin", Character.MAX_HEALTH, "Healer");
robin.addToInventoryArray(["sword", "potion", "artifact"]);
// console.log(Adventurer.MAX_HEALTH);
const leo = new Companion("Leo", "cat");
const frank = new Companion("Frank", "flea");
frank.addToBelongingsArray(["small hat", "sunglasses"]);
leo.companion = frank;
robin.companion = leo;

console.log(leo);
console.log(frank);
console.log(robin);
console.log(robin.companion);
