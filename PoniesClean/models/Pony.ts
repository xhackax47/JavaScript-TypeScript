class Pony{
    id: number;
    name: string;
    age: number;
    weight: number;
    driver: User;

    constructor(name: string, age: number, weight: number, driver: User) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.driver = driver;
    }
}