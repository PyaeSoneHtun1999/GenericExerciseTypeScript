import { Developer} from "./Developer";
import { ProgrammingLanguage } from "./ProgrammingLanguage";
import { Repository } from "./Repository";

const language = new Repository<ProgrammingLanguage>();
const developer = new Repository<Developer>();

const java = new ProgrammingLanguage('1','Java','OOP');
const javascript = new ProgrammingLanguage('2','JavaScript','Multi-Paradigm');
const python = new ProgrammingLanguage('4','Python','Scripting Paradigm');

//Add Language
language.add(java);
language.add(javascript);
language.add(python);

const l1 = language.get('33')
console.log(l1);
console.log('name',l1?.name )
//console.log(`paradigm,li?.paradigm)
//language.remove('1');
//console.log(language.getAll())

//Create Developer
const dev1 = new Developer('1','bobo',java);
const dev2 = new Developer('2','nono',javascript);
const dev3 = new Developer('3','john',python);

// Add developers
developer.add(dev1);
developer.add(dev2);
developer.add(dev3);

console.log(developer.get('2'));
let d2 = developer.get('3');
console.log(d2);
console.log('name',d2?.name);
console.log('favorite language name', d2?.favoriteLanguage.name)
console.log(`lang paradigm`, d2?.favoriteLanguage.paradigm)

const allLang = language.getAll();
console.log('all language', allLang);
allLang.forEach(lang=> console.log(`language is ${lang.name} paradigm is (${lang.paradigm})`))

developer.remove('1');
//developer.remove('2');

const allDev = developer.getAll()
console.log(`all dev`,allDev);

allDev.forEach(dev=>console.log(`${dev.name} (Favorite Language: ${dev.favoriteLanguage.name})`));
developer.getAll().forEach(dev => `${dev.name} (Favorite Language: ${dev.favoriteLanguage.name})`);

//console.log(language.get('4'));

//language.getAll().forEach(lang=> console.log(`${lang.name} (${lang.paradigm})));