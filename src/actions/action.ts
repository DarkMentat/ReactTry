export class Action {

    type: string;

    constructor(){
        this.type = (this.constructor as any).name
    }

    plain(){
        return (<any>Object).assign({}, this);
    }
}