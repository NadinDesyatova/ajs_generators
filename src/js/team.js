export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Такой персонаж уже существует в команде');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach(character => {
      try {
        this.add(character);
      } catch {
        return;
      }
    });
  } 
    
  toArray() {
    return [...this.members];
  }

  // [Symbol.iterator]() {
  //   const members = this.toArray();
  //   console.log(members);
  //   let index = 0;
  //   return {
  //     next() {
  //       if (index < members.length) {
  //         return {
  //           done: false,
  //           value: members[index++]
  //         }
  //       }
        
  //       return {
  //         done: true
  //       }
  //     }
  //   }
  // }

  *[Symbol.iterator]() {
    for (let i = 0; i < this.toArray().length; i++) {
      yield this.toArray()[i];
    }
  }
}
