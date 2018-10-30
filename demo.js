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
console.log('DEMONSTRATION UTILISATION TYPESCRIPT');
console.log('------------------------------------------------');
// VARIABLES
var e = 1;
var r = 1.2;
var b = true;
var s = 'String';
var str = '045655-172424-2142425-24254254';
var strNb = '123 est un chiffre';
// TABLEAUX
var tab = [];
var tab1 = [];
var tabInit = [1, 2, 3, 4];
tab.push(0);
tab1.push(1);
// BOUCLES
for (var index = 0; index < tabInit.length; index++) {
    var element = tabInit[index];
    console.log('FOR classique' + element);
}
for (var i in tabInit) {
    console.log('FOR LET IN (par index)' + i);
}
for (var _i = 0, tabInit_1 = tabInit; _i < tabInit_1.length; _i++) {
    var i = tabInit_1[_i];
    console.log('FOR LET OF (par element) : ' + i);
}
tabInit.forEach(function (e, i) { return console.log('FOR EACH indice + element : ' + i + ' : ' + e); });
tabInit.forEach(function (e) { return console.log('FOR EACH element : ' + e); });
var carre = tabInit.map(function (e) { return Math.pow(e, 2); });
var somme = tabInit.reduce(function (a, e) { return a += e; });
// filter : lambda boolean, sort : lambda : 0, -1 ou 1
var monEnum;
(function (monEnum) {
    monEnum[monEnum["A"] = 0] = "A";
    monEnum[monEnum["B"] = 1] = "B";
    monEnum[monEnum["C"] = 2] = "C";
})(monEnum || (monEnum = {}));
;
var enumA = monEnum.A;
var enumB = monEnum.B;
var enumC = monEnum.C;
// FONCTIONS
function carreFt(x) {
    return Math.pow(x, 2);
}
var carreLambda = function (x) { return Math.pow(x, 2); };
var puissance = function (x, p) { return p === undefined ? Math.pow(x, 2) : Math.pow(x, p); };
var sommeLambda = function (x) {
    var autres = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        autres[_i - 1] = arguments[_i];
    }
    return autres.reduce(function (s, e) { return s += e; }) + x;
};
sommeLambda(0, 1, 2, 3, 4, 5, 6, 7, 8, 9);
// OBJETS A LA VOLEE
var obj1 = {
    nom: 'NomObjet1',
    prenom: 'PrenomObjet',
    affiche: function () {
        return 'Nom objet : ' + this.nom + ', Prénom objet : ' + this.prenom;
    }
};
// OBJET
var Person = /** @class */ (function () {
    function Person(nom, prenom) {
        this.nom = nom;
        this.prenom = prenom;
    }
    Person.prototype.affiche = function () {
        return "'Pr\u00E9nom : " + this.nom + ", Nom : " + this.prenom;
    };
    return Person;
}());
var person1 = new Person('Personne', 'Test');
var Rectangle = /** @class */ (function () {
    function Rectangle(largeur, longueur) {
        this.largeur = largeur;
        this.longueur = longueur;
    }
    Rectangle.prototype.aire = function () {
        return this.largeur * this.longueur;
    };
    return Rectangle;
}());
var Carre = /** @class */ (function (_super) {
    __extends(Carre, _super);
    function Carre(cote) {
        return _super.call(this, cote, cote) || this;
    }
    return Carre;
}(Rectangle));
var _a = [0, 9], d = _a[0], g = _a[1], autres = _a.slice(2);
// CONSOLE.LOG
console.log('Mon entier : ' + e);
console.log('Mon réel : ' + r);
console.log('Mon boolean : ' + b);
console.log('Mon string : ' + s);
console.log('Mon string parseInt : ' + parseInt(strNb));
console.log('Split strNb par espace : ' + strNb.split(' '));
console.log('Split str par tiret : ' + str.split('-'));
console.log('Slice strNb par element de 3 à 7: ' + strNb.slice(3, 7));
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
