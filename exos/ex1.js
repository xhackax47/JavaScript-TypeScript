"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var es6_promise_1 = require("es6-promise");
console.log('--------------------------- TP TYPESCRIPT ----------------------------');
var noteTab20 = [8, 5, 7];
var noteTab10 = noteTab20.map(function (elmt) { return elmt / 2; });
var intTab1 = [0, 1, 2, 3, 4];
var intTab2 = [5, 6, 7, 8, 9];
var intTab3 = [1, true, 'Three'];
var stringTab1 = Array(10);
var myUnion;
var myUnion2;
var myUnion3 = [];
var total10 = noteTab10.reduce(function (acc, elmt) { return acc += elmt; });
var total20 = noteTab20.reduce(function (acc, elmt) { return acc += elmt; });
var dix = '/10';
var vingt = '/20';
var stringLg = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tempus lorem ut ipsum placerat, sit amet mattis enim rhoncus. Duis eu dictum ante';
var noteA = 15;
var noteB = 10;
var noteC = 12;
var noteD = 19;
noteTab20.push(noteA);
noteTab20.push(noteB);
noteTab20.push(noteC);
noteTab20.push(noteD);
// ENUMERATION
var enumColor;
(function (enumColor) {
    enumColor[enumColor["Rouge"] = 0] = "Rouge";
    enumColor[enumColor["Vert"] = 1] = "Vert";
    enumColor[enumColor["Bleu"] = 2] = "Bleu";
})(enumColor || (enumColor = {}));
var enumR = enumColor.Rouge;
var enumV = enumColor.Vert;
var enumBl = enumColor.Bleu;
var nbIndice = 1;
// CLASSES ET OBJETS A LA VOLEE
var mJackson = {
    nom: 'Jackson',
    prenom: 'Michael',
    dateNaissance: '29/08/1958',
    nomComplet: function () {
        return 'Nom complet : ' + this.prenom + ' ' + this.nom;
    }
};
var Personne = /** @class */ (function () {
    function Personne(nom, prenom, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance;
    }
    Personne.prototype.nomComplet = function () {
        return 'Nom complet : ' + this.prenom + ' ' + this.nom;
    };
    return Personne;
}());
var Rectangl = /** @class */ (function () {
    function Rectangl(longueur, largeur) {
        var _this = this;
        this.aire = function () { return _this.largeur * _this.longueur; };
        this.perimeter = function () { return 2 * _this.largeur + 2 * _this.longueur; };
        this.longueur = longueur;
        this.largeur = largeur;
    }
    return Rectangl;
}());
var Carré = /** @class */ (function (_super) {
    __extends(Carré, _super);
    function Carré(cote) {
        return _super.call(this, cote, cote) || this;
    }
    return Carré;
}(Rectangl));
var Employee = /** @class */ (function () {
    function Employee(userId) {
        this.userId = userId;
    }
    Employee.prototype.displayUserId = function () {
        var _this = this;
        setTimeout(function () {
            console.log("UserId de l'employ\u00E9e = " + _this.userId);
        }, 1000);
    };
    return Employee;
}());
// FONCTIONS
function moy10(total10) {
    return (total10) / noteTab10.length;
}
function max10(noteTab10) {
    return Math.max.apply(Math, noteTab10);
}
function min10(noteTab10) {
    return Math.min.apply(Math, noteTab10);
}
function moy20(total20) {
    return (total20) / noteTab20.length;
}
function max20(noteTab20) {
    return Math.max.apply(Math, noteTab20);
}
function min20(noteTab20) {
    return Math.min.apply(Math, noteTab20);
}
function filter10(noteTab10) {
    return noteTab10.filter(function (elmt) {
        return (elmt > min10(noteTab10) && (elmt < max10(noteTab10)));
    });
}
function filter20(noteTab20) {
    return noteTab20.filter(function (elmt) {
        return (elmt > min20(noteTab20) && (elmt < max20(noteTab20)));
    });
}
function add2nb(a, b) {
    var sum = a + b;
    return sum;
}
var y = (function (a, b) { return a + b; })(20, 25);
var x = (function (a, b) { return a + b; })(20, 25);
function userIdEmployee() {
    console.log("Let's get started!");
    var myEmployee = new Employee('47');
    myEmployee.displayUserId();
}
function callCallBack(name) {
    console.log(name);
}
function helloCallback(callback) {
    var name = 'TestCallBack';
    callback(name);
}
function orderByName() {
    var orderByName = listPersonsWorking.sort(function (p1, p2) {
        if (p1.nom < p2.nom) {
            return -1;
        }
        else if (p1.nom > p2.nom) {
            return 1;
        }
        else if (p1.nom === p2.nom) {
            return 0;
        }
        else {
            if (p1.prenom < p2.prenom) {
                return -1;
            }
            else if (p1.prenom > p2.prenom) {
                return 1;
            }
            else {
                return 0;
            }
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
}
else if (typeof (myUnion) === 'number') {
    console.log('Le type de myUnion est un number');
}
else {
    console.log('Le type de myUnion est inconnu');
}
console.log('Affichage valeur myUnion après init : ' + (myUnion3 = [1, 2, 3]));
if (typeof (myUnion) === typeof ('number[]')) {
    console.log('Le type de myUnion est un Array<number>');
}
else if (typeof (myUnion) === 'number') {
    console.log('Le type de myUnion est un number');
}
else {
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
var n1 = 20;
var n2 = 25;
console.log('Fonction add2nb sur n1 et n2 : ' + add2nb(n1, n2));
console.log('Fonction y : ' + y);
console.log('Fonction x : ' + x);
console.log('-------------------------------------------------------');
console.log('OBJETS');
console.log('-------------------------------------------------------');
console.log(mJackson.nomComplet());
var gHellscream = mJackson;
gHellscream.nom = 'Hellscream';
gHellscream.prenom = 'Grommash';
gHellscream.dateNaissance = '01/01/1900';
console.log(gHellscream.nomComplet());
var figure1 = { x: 5, y: 10, rayon: 10 };
var figure2 = { x: 10, y: 20 };
console.log('Figure 1 interface DataStructure : X= ' + figure1.x + ' Y= ' + figure1.y + ' et Rayon = ' + figure1.rayon);
console.log('Figure 1 interface DataStructure : X= ' + figure2.x + ' et Y= ' + figure2.y);
var Cat = { nom: 'Cat', age: 10, poids: 20 };
var Dog = { nom: 'Dog', age: 1, poids: 10 };
var Horse = { nom: 'Horse', age: 15, poids: 500 };
var Crocodile = { nom: 'Crocodile', age: 50, poids: 20 };
var tabPet = [Cat, Dog, Horse, Crocodile];
console.log('Tableau Animaux NON-TRIES : ');
console.log(tabPet);
var triPet = tabPet.sort(function (a1, a2) {
    if (a1.age < a2.age) {
        return -1;
    }
    else if (a1.age > a2.age) {
        return 1;
    }
    else if (a1.age === a2.age) {
        return 0;
    }
    else { }
});
console.log('Tableau Animaux TRIES : ');
console.log(triPet);
helloCallback(callCallBack);
userIdEmployee();
console.log('-------------------------------------------------------');
var listInt = [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
var sommeListInt = listInt.reduce(function (acc, curr) { return acc + curr; });
var filterListInt = listInt.filter((function (elmt) { return (elmt > 6); }));
var nbElmtListInt = listInt.reduce(function (acc) { return acc += 1; }, 0);
console.log("Somme de listInt : ");
console.log(sommeListInt);
console.log("Moyenne de listInt : ");
console.log(sommeListInt / listInt.length);
console.log("Nombres de listInt supérieurs à 6 : ");
console.log(filterListInt);
console.log("Nombres d'éléments : ");
console.log(nbElmtListInt);
console.log('-------------------------------------------------------');
var p1 = new Personne('Pe1', 'Pe1', '01-01-2001');
var p2 = new Personne('Pe2', 'Pe2', '01-01-2002');
var p3 = new Personne('Pe3', 'Pe3', '01-01-2003');
var p4 = new Personne('Pe4', 'Pe4', '01-01-2004');
var p5 = new Personne('Pe5', 'Pe5', '01-01-2005');
var pD = new Personne('Dp6', 'Pe6', '01-01-2006');
var p7 = new Personne('Pe7', 'Pe7', '01-01-2007');
var p8 = new Personne('Pe8', 'Pe8', '01-01-2008');
var p9 = new Personne('Pe9', 'Pe9', '01-01-2009');
var dupont = new Personne('Dupont', 'Henry', '01-01-2010');
var listPersonsOriginal = [p1, p2, p3, p4, p5, pD, p7, p8, p9, dupont];
var listPersonsWorking = listPersonsOriginal.slice();
console.log("Lister listPersons par nom : ");
console.log(orderByName());
var listPersonsD = listPersonsWorking.filter(function (elmt) { return ((elmt.nom.slice(0, 1))) === 'D'; });
console.log("Filtrer par nom commencant par D sur listPersons : ");
console.log(listPersonsD);
console.log("Afficher Nom seulement sur listPersons : ");
var listPersonsName = [];
listPersonsWorking.map(function (elmt) {
    elmt.nom = elmt.nom.toUpperCase();
    listPersonsName.push(elmt);
});
var listPersonsFirstNameDsc = listPersonsName.sort(function (p1, p2) {
    if (p1.prenom < p2.prenom) {
        return 1;
    }
    else if (p1.prenom > p2.prenom) {
        return -1;
    }
    else {
        return 0;
    }
});
console.log("Afficher Liste DSC sur prénom : ");
console.log(listPersonsFirstNameDsc);
console.log("Afficher list2personsSlice : ");
var list2personsSlice = listPersonsWorking.slice(0, 2);
console.log(list2personsSlice);
console.log("Afficher list2personsFilter : ");
var list2personsFilter = listPersonsWorking.filter(function (elmt, index) { return index < 2; });
console.log(list2personsFilter);
console.log("Afficher index 7,8 et 9 de listPersonsWorking : ");
var listPersons789 = listPersonsWorking.filter(function (elmt, index) { return index >= 7 && index < 10; });
console.log(listPersons789);
console.log("Afficher seulement Dupont dans listPersonsWorking : ");
var listDupont = listPersonsWorking.filter(function (elmt) { return elmt.nom === 'DUPONT'; });
console.log(listDupont);
console.log("Afficher personnes commencant par D dans listPersonsWorking : ");
var listPersonsStartsWithD = listPersonsWorking.some(function (elmt) { return elmt.nom.slice(0, 1) === 'D'; });
console.log("Présence de personnes avec un nom commencant par D : " + listPersonsStartsWithD);
console.log('-------------------------------------------------------');
console.log("Affichage testNum avec Promise : ");
var testNum = function (n) {
    return new es6_promise_1.Promise(function (resolve, reject) {
        if (n > 10) {
            resolve("CHIFFRE AU DESSUS DE 10");
        }
        else {
            reject("ERREUR");
        }
    });
};
testNum(11).then(function (value) { return console.log(value); })["catch"](function (err) { return console.log("Error"); });
var listString = ['Test1', 'Test2', 'Test3'];
var triStringArray = function (listString) {
    return new es6_promise_1.Promise(function (resolve, reject) {
        if (listString.some(function (val) {
            return !isNaN(Number(val));
        }))
            reject('Il y a un nombre');
        else {
            listString.sort().forEach(function (listString) { return console.log(listString.toUpperCase()); });
        }
        resolve('OK');
    });
};
triStringArray(listString).
    then(function (value) { console.log(value); })["catch"](function (value) { console.log(value); });
