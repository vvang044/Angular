
export class Ingredient{
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }
}


//typescript shortcut below
//for some odd reason the short cut is not working
/*
export class Ingredient{
    constructor( public name: string, public amount: number){}
}

*/