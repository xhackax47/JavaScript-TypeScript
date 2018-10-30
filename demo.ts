import { Promise } from 'es6-promise';

console.log('DEMONSTRATION UTILISATION TYPESCRIPT');
console.log('------------------------------------------------')

// VARIABLES

let e: number = 1;
let r: number = 1.2;

let b: boolean = true;
let s: string = 'String';
let str: string = '045655-172424-2142425-24254254';
let strNb: string = '123 est un chiffre';

// TABLEAUX

let tab: number[] = [];
let tab1: Array<number> = [];
let tabInit = [1,2,3,4];
tab.push(0);
tab1.push(1);

// BOUCLES

for (let index=0; index < tabInit.length; index++) {
    const element = tabInit[index];
    console.log('FOR classique' + element);
}

for (let i in tabInit) {
    console.log('FOR LET IN (par index)' + i);

}

for (let i of tabInit) {
    console.log('FOR LET OF (par element) : ' + i);
    
}

tabInit.forEach((e,i) => console.log('FOR EACH indice + element : ' + i + ' : ' + e));
tabInit.forEach(e => console.log('FOR EACH element : ' + e))

let carre = tabInit.map(e => Math.pow(e,2));
let somme = tabInit.reduce((a,e) => a += e);
// filter : lambda boolean, sort : lambda : 0, -1 ou 1

enum monEnum {A, B, C};
let enumA: monEnum = monEnum.A;
let enumB: monEnum = monEnum.B;
let enumC: monEnum = monEnum.C;

// FONCTIONS

function carreFt(x: number): number {
    return Math.pow(x,2);
}
let carreLambda = (x: number) => Math.pow(x,2);
let puissance = (x: number, p?:number) => p === undefined ? Math.pow(x,2) : Math.pow(x,p);
let sommeLambda = (x: number, ...autres: number[]) => autres.reduce((s,e)=> s+=e) + x;
sommeLambda(0,1,2,3,4,5,6,7,8,9);

// OBJETS A LA VOLEE

let obj1 = {
    nom: 'NomObjet1',
    prenom: 'PrenomObjet',
    affiche(): string {
        return 'Nom objet : ' + this.nom + ', Prénom objet : ' + this.prenom;
    }
}

// OBJET

class Person{
    nom: string;
    prenom: string;
    constructor(nom: string, prenom: string) {
        this.nom = nom;
        this.prenom = prenom;
    }
    affiche(): string {
        return `'Prénom : ${this.nom}, Nom : ${this.prenom}`;
    }
}

let person1 = new Person('Personne', 'Test');

// HERITAGE

interface Figure {
    aire : () => number;
}

class Rectangle implements Figure{
    largeur: number;
    longueur: number;
    constructor(largeur: number,longueur: number){
        this.largeur = largeur;
        this.longueur = longueur;
    }
    aire(): number {
        return this.largeur * this.longueur;
    }
}

class Carre extends Rectangle{
    constructor(cote: number){
        super(cote,cote);
    }
}

let [d,g, ...autres] = [0,9];

// PROMISE

function hello(onBefore, onAfter){
    if(onBefore){
        onBefore();
    }
    console.log('Hello');
    if(onAfter){
        onAfter();
    }
}

function doAsyncTask(cb) {
    setTimeout(() => {
        console.log('Async Task Calling Callback');
        cb();
    }, 1000);
}

let prom = new Promise(function(resolve,reject){
    resolve('BRAVO');
    reject('ECHEC')
});

// CONSOLE.LOG

console.log('Mon entier : ' + e);
console.log('Mon réel : ' + r);
console.log('Mon boolean : ' + b);
console.log('Mon string : ' + s);
console.log('Mon string parseInt : ' + parseInt(strNb));
console.log('Split strNb par espace : ' + strNb.split(' '));
console.log('Split str par tiret : ' + str.split('-'));
console.log('Slice strNb par element de 3 à 7: ' + strNb.slice(3,7));
console.log('Slice strNb par element de la fin à 3 avant la fin ' + strNb.slice(-3));
console.log('Tableau tab : ' + tab);
console.log('Tableau tab1 : ' + tab1);
console.log('Tableau tabInit : ' + tabInit);
console.log('Carre : ' + carre);
console.log('Somme element tableau' + somme);
console.log('Index Enum A : ' + enumA);
console.log('Index Enum B : ' + enumB);
console.log('Index Enum C : ' + enumC);
console.log('Methode affiche sur person1 : ' + person1.affiche());
console.log('Methode affiche sur obj1 : ' + obj1.affiche());
console.log('Déclarations variables à la volée : d = ' + d + ' et g = ' + g + ' et autres = ' + autres);
hello(() => console.log('AVANT'), () => console.log('APRES')); 
doAsyncTask(() => console.log("Callback Called"));
console.log('Test');
prom.then((value) => console.log(value)).catch((err) => console.log(err));