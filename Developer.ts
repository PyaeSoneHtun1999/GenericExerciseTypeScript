import { ProgrammingLanguage } from "./ProgrammingLanguage";

export class Developer{
    constructor(public id: string, public name: string, public favoriteLanguage: ProgrammingLanguage){}
    
    // getDescription(): string{
    //     return `Developer: ${this.name}, Favorit Language: ${this.favoriteLanguage}`;
    // }
}