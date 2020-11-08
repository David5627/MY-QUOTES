export class Quote {
    showDescription: boolean;
    id: number;
    name: string;
    description: string;
    day: Date;
    unlike:number;
    like:number;
    constructor(id: number, name: string, description: string, day: Date) {
        this.id = id,
        this.name = name,
        this.description = description,
        this.day = day;
        this.showDescription=false;
        this.like = 0;
        this.unlike = 0;

        
    } 

}

