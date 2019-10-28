export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    constructor(name: string, type: string, launchDate: string, orbitType: string, operational: boolean){
         //Not sure if I need this next part
         this.name = name;
         this.type = type;
         this.launchDate = launchDate;
         this.orbitType = orbitType;
         this.operational = operational;
    }
}
