import bigDecimal from "js-big-decimal";

export default class Category {
    constructor(private _name: string, private _taxPercentage: bigDecimal ) {}

    get name(): string {
        return this._name;
    }

    get taxPercentage(): bigDecimal {
        return this._taxPercentage;
    }
}
