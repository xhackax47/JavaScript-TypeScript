import { Promise } from 'es6-promise';

console.log('--------------------------- TP TYPESCRIPT ----------------------------');
let noteTab20: Array<number> = [8, 5, 7];
let noteTab10: Array<number> = noteTab20.map((elmt) => elmt / 2);
let intTab1 = [0, 1, 2, 3, 4];
let intTab2 = [5, 6, 7, 8, 9];
let intTab3 = [1, true, 'Three'];
let stringTab1: Array<string> = Array(10);
let myUnion: number | Array<number>;
let myUnion2: number | Array<string>;
let myUnion3 = [];

let total10 = noteTab10.reduce((acc, elmt) => { return acc += elmt });
let total20 = noteTab20.reduce((acc, elmt) => { return acc += elmt });

let dix: string = '/10';
let vingt: string = '/20';
let stringLg: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus lorem ut ipsum placerat, sit amet mattis enim rhoncus. Duis eu dictum ante';

let noteA: number = 15;
let noteB: number = 10;
let noteC: number = 12;
let noteD: number = 19;

noteTab20.push(noteA);
noteTab20.push(noteB);
noteTab20.push(noteC);
noteTab20.push(noteD);

// ENUMERATION

enum enumColor {
    Rouge,
    Vert,
    Bleu,
}

let enumR = enumColor.Rouge;
let enumV = enumColor.Vert;
let enumBl = enumColor.Bleu;
let nbIndice = 1;

// INTERFACES

interface Surface2D {
    aire(): number;
    perimeter(): number;
}

interface DataStructure {
    x: number;
    y: number;
    rayon?: number;
}

interface Pet {
    nom: string;
    age: number;
    poids: number;
}

// CLASSES ET OBJETS A LA VOLEE

let mJackson = {
    nom: 'Jackson',
    prenom: 'Michael',
    dateNaissance: '29/08/1958',
    nomComplet(): string {
        return 'Nom complet : ' + this.prenom + ' ' + this.nom;
    }
}

class Personne {
    nom: string;
    prenom: string;
    dateNaissance: string;
    constructor(nom: string, prenom: string, dateNaissance: string) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
    nomComplet(): string {
        return 'Nom complet : ' + this.prenom + ' ' + this.nom;
    }
}

class Rectangl implements Surface2D {
    longueur: number;
    largeur: number;

    constructor(longueur: number, largeur: number) {
        this.longueur = longueur;
        this.largeur = largeur;
    }

    aire = () => { return this.largeur * this.longueur };
    perimeter = () => { return 2 * this.largeur + 2 * this.longueur }
}

class Carré extends Rectangl {
    constructor(cote: number) {
        super(cote, cote);
    }
}

class Employee {
    userId: string;
    constructor(userId: string) {
        this.userId = userId;
    }

    displayUserId() {
        setTimeout(() => {
            console.log(`UserId de l'employée = ${this.userId}`);
        }, 1000)
    }
}

// FONCTIONS

function moy10(total10: number): number {
    return (total10) / noteTab10.length;
}

function max10(noteTab10: Array<number>): number {
    return Math.max(...noteTab10);
}

function min10(noteTab10: Array<number>): number {
    return Math.min(...noteTab10);
}

function moy20(total20: number): number {
    return (total20) / noteTab20.length;
}

function max20(noteTab20: Array<number>): number {
    return Math.max(...noteTab20);
}

function min20(noteTab20: Array<number>): number {
    return Math.min(...noteTab20);
}

function filter10(noteTab10: Array<number>) {
    return noteTab10.filter(elmt => {
        return (elmt > min10(noteTab10) && (elmt < max10(noteTab10)));
    });
}

function filter20(noteTab20: Array<number>) {
    return noteTab20.filter(elmt => {
        return (elmt > min20(noteTab20) && (elmt < max20(noteTab20)));
    });
}

function add2nb(a: number, b: number) {
    var sum = a + b;
    return sum;
}

let y: number = (function (a: number, b: number) { return a + b; })(20, 25);
let x: number = ((a, b) => a + b)(20, 25);

function userIdEmployee() {
    console.log("Let's get started!");
    var myEmployee = new Employee('47');
    myEmployee.displayUserId();
}

function callCallBack(name: string) {
    console.log(name);
}

function helloCallback(callback) {
    let name = 'TestCallBack';
    callback(name);
}

function orderByName() {
    let orderByName = listPersonsWorking.sort((p1, p2) => {
        if (p1.nom < p2.nom) {
            return -1;
        } else if (p1.nom > p2.nom) {
            return 1;
        } else if (p1.nom === p2.nom) {
            return 0;
        } else {
            if (p1.prenom < p2.prenom) {
                return -1;
            } else if (p1.prenom > p2.prenom) {
                return 1;
            } else { return 0; }
        }
    });
    return orderByName;
}

console.log('-------------------------------------------------------');
console.log(total10 + '' + total20);
console.log('Moyenne des notes : ' + moy20(total20) + vingt);
console.log('Note maximale : ' + max20(noteTab20) + vingt);
console.log('Note minimale : ' + min20(noteTab20) + vingt);
console.log('Notes du minimum au maximum : ' + filter20(noteTab20));
console.log('-------------------------------------------------------');
console.log('Moyenne des notes : ' + moy10(total10) + dix);
console.log('Note maximale : ' + max10(noteTab10) + dix);
console.log('Note minimale : ' + min10(noteTab10) + dix);
console.log('Notes du minimum au maximum : ' + filter10(noteTab10));
console.log('-------------------------------------------------------');
console.log('Slice de stringLg de 1 à 22 : ' + stringLg.slice(1, 22));
console.log('Affichage enumColor via nbIndice (' + nbIndice + ') : ' + enumColor[nbIndice]);
console.log('-------------------------------------------------------');
console.log('Affichage Tableau Entiers intTab1 : ' + intTab1);
console.log('Affichage Tableau Entiers intTab2 : ' + intTab2);
console.log('Affichage Tableau Entiers intTab3 : ' + intTab3);
console.log('Affichage Tableau Strings stringTab1 : ' + stringTab1);
console.log('-------------------------------------------------------');
console.log('Affichage valeur myUnion avant init : ' + (myUnion));
console.log('Affichage valeur myUnion après init : ' + (myUnion = 5));

if (typeof (myUnion) === typeof ('number[]')) {
    console.log('Le type de myUnion est un Array<number>');
} else if (typeof (myUnion) === 'number') {
    console.log('Le type de myUnion est un number');
} else {
    console.log('Le type de myUnion est inconnu');
}
console.log('Affichage valeur myUnion après init : ' + (myUnion3 = [1, 2, 3]));

if (typeof (myUnion) === typeof ('number[]')) {
    console.log('Le type de myUnion est un Array<number>');
} else if (typeof (myUnion) === 'number') {
    console.log('Le type de myUnion est un number');
} else {
    console.log('Le type de myUnion est inconnu');
}

console.log('-------------------------------------------------------');
console.log('Affichage valeur myUnion2 : ' + (myUnion2 = ['Test', 'Test2']));

switch (typeof (myUnion2)) {
    case typeof ('string[]'): {
        console.log('Le type de myUnion2 est un Array<string>');
        break;
    }
    case 'number': {
        console.log('Le type de myUnion2 est un number');
        break;
    }
    default: {
        console.log('Le type de myUnion2 est inconnu');
        break;
    }
}

console.log('-------------------------------------------------------');
let n1 = 20;
let n2 = 25;
console.log('Fonction add2nb sur n1 et n2 : ' + add2nb(n1, n2));
console.log('Fonction y : ' + y);
console.log('Fonction x : ' + x);
console.log('-------------------------------------------------------');
console.log('OBJETS');
console.log('-------------------------------------------------------');
console.log(mJackson.nomComplet());
let gHellscream: Personne = mJackson;
gHellscream.nom = 'Hellscream'; gHellscream.prenom = 'Grommash'; gHellscream.dateNaissance = '01/01/1900';
console.log(gHellscream.nomComplet());
let figure1: DataStructure = { x: 5, y: 10, rayon: 10, };
let figure2: DataStructure = { x: 10, y: 20 };
console.log('Figure 1 interface DataStructure : X= ' + figure1.x + ' Y= ' + figure1.y + ' et Rayon = ' + figure1.rayon);
console.log('Figure 1 interface DataStructure : X= ' + figure2.x + ' et Y= ' + figure2.y);
let Cat: Pet = { nom: 'Cat', age: 10, poids: 20 };
let Dog: Pet = { nom: 'Dog', age: 1, poids: 10 };
let Horse: Pet = { nom: 'Horse', age: 15, poids: 500 };
let Crocodile: Pet = { nom: 'Crocodile', age: 50, poids: 20 };
let tabPet: Array<Pet> = [Cat, Dog, Horse, Crocodile];
console.log('Tableau Animaux NON-TRIES : ')
console.log(tabPet);
let triPet = tabPet.sort(
    (a1, a2) => {
        if (a1.age < a2.age) {
            return -1;
        } else if (a1.age > a2.age) {
            return 1;
        } else if (a1.age === a2.age) {
            return 0;
        } else { }
    });
console.log('Tableau Animaux TRIES : ')
console.log(triPet);
helloCallback(callCallBack);
userIdEmployee();
console.log('-------------------------------------------------------');
let listInt: Array<number> = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let sommeListInt = listInt.reduce((acc, curr) => { return acc + curr; });
let filterListInt = listInt.filter((elmt => { return (elmt > 6) }));
let nbElmtListInt = listInt.reduce((acc) => { return acc += 1 }, 0);
console.log("Somme de listInt : ")
console.log(sommeListInt);
console.log("Moyenne de listInt : ")
console.log(sommeListInt / listInt.length)
console.log("Nombres de listInt supérieurs à 6 : ")
console.log(filterListInt);
console.log("Nombres d'éléments : ")
console.log(nbElmtListInt);
console.log('-------------------------------------------------------');
let p1: Personne = new Personne('Pe1', 'Pe1', '01-01-2001');
let p2: Personne = new Personne('Pe2', 'Pe2', '01-01-2002');
let p3: Personne = new Personne('Pe3', 'Pe3', '01-01-2003');
let p4: Personne = new Personne('Pe4', 'Pe4', '01-01-2004');
let p5: Personne = new Personne('Pe5', 'Pe5', '01-01-2005');
let pD: Personne = new Personne('Dp6', 'Pe6', '01-01-2006');
let p7: Personne = new Personne('Pe7', 'Pe7', '01-01-2007');
let p8: Personne = new Personne('Pe8', 'Pe8', '01-01-2008');
let p9: Personne = new Personne('Pe9', 'Pe9', '01-01-2009');
let dupont: Personne = new Personne('Dupont', 'Henry', '01-01-2010');

let listPersonsOriginal: Array<Personne> = [p1, p2, p3, p4, p5, pD, p7, p8, p9, dupont];
let listPersonsWorking: Array<Personne> = listPersonsOriginal.slice();
console.log("Lister listPersons par nom : ")
console.log(orderByName());
let listPersonsD = listPersonsWorking.filter((elmt: Personne) => { return ((elmt.nom.slice(0, 1))) === 'D' });
console.log("Filtrer par nom commencant par D sur listPersons : ")
console.log(listPersonsD);
console.log("Afficher Nom seulement sur listPersons : ")
let listPersonsName: Array<Personne> = [];
listPersonsWorking.map((elmt: Personne) => {
    elmt.nom = elmt.nom.toUpperCase();
    listPersonsName.push(elmt);
});
let listPersonsFirstNameDsc = listPersonsName.sort((p1, p2) => {
    if (p1.prenom < p2.prenom) {
        return 1;
    } else if (p1.prenom > p2.prenom) {
        return -1;
    } else {
        return 0;
    }
});
console.log("Afficher Liste DSC sur prénom : ");
console.log(listPersonsFirstNameDsc);
console.log("Afficher list2personsSlice : ");
let list2personsSlice = listPersonsWorking.slice(0, 2);
console.log(list2personsSlice);
console.log("Afficher list2personsFilter : ");
let list2personsFilter = listPersonsWorking.filter((elmt: Personne, index: number) => { return index < 2 });
console.log(list2personsFilter);
console.log("Afficher index 7,8 et 9 de listPersonsWorking : ");
let listPersons789 = listPersonsWorking.filter((elmt: Personne, index: number) => { return index >= 7 && index < 10 });
console.log(listPersons789);
console.log("Afficher seulement Dupont dans listPersonsWorking : ");
let listDupont = listPersonsWorking.filter((elmt: Personne) => { return elmt.nom === 'DUPONT' });
console.log(listDupont);
console.log("Afficher personnes commencant par D dans listPersonsWorking : ");
let listPersonsStartsWithD = listPersonsWorking.some((elmt: Personne) => { return elmt.nom.slice(0, 1) === 'D' });
console.log("Présence de personnes avec un nom commencant par D : " + listPersonsStartsWithD);
console.log('-------------------------------------------------------');
console.log("Affichage testNum avec Promise : ")
let testNum = (n: number) => {
    return new Promise(function (resolve, reject) {
        if (n > 10) {
            resolve("CHIFFRE AU DESSUS DE 10");
        } else {
            reject("ERREUR")
        }
    });
}
testNum(11).then(value => console.log(value)).catch(err => console.log("Error"));

let listString: Array<string> = ['Test1', 'Test2', 'Test3'];

let triStringArray = (listString: Array<string>) => {
    return new Promise(function (resolve, reject) {
        if (listString.some((val: string) => {
            return !isNaN(Number(val));
        }))
            reject('Il y a un nombre');

        else {
            listString.sort().forEach((listString) => console.log(listString.toUpperCase()));
        }
        resolve('OK');
    });
}
triStringArray(listString).
then((value: string) => { console.log(value); }).
catch((value: string) => { console.log(value); });