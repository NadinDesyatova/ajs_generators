import Team from "./team";
import Character from "./character";
import canIterate from "./canIterate";


const firstCharacter = new Character('Neo', 'Undead');
const secondCharacter = new Character('John', 'Swordsman');

const team = new Team();

team.addAll(firstCharacter, secondCharacter);
const teamIterator = team[Symbol.iterator]();
console.log(teamIterator.next());
console.log(teamIterator.next());
console.log(teamIterator.next());

console.log(canIterate(new Map())); 
console.log(canIterate(new Set())); 
console.log(canIterate(null)); 
console.log(canIterate(10)); 
console.log(canIterate("Netology"));
