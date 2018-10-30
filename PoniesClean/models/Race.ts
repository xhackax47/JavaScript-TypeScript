class Race{
    id: number;
    map: string;
    competitors: Array<Pony>;
    drivers: Array<User>;

    constructor(map: string, competitors: Array<Pony>, drivers: Array<User>){
        this.map = map;
        this.competitors = competitors;
        this.drivers = drivers;
    }
}