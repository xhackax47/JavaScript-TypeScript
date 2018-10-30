class User{
    id: number;
    username: string;
    password: string;
    firstname: string;
    lastname: string;
    age: number;

    constructor(username: string, password: string, firstname: string, lastname: string, age: number) {
        this.username = username;
        this.password = password;
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }
}