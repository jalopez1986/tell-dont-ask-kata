import Category from "./Category";
import bigDecimal from "js-big-decimal";

export default class Product {

    constructor(private _name: string, private _price: bigDecimal, private _category: Category) { }

    get name(): string {
        return this._name;
    }

    get price(): bigDecimal {
        return this._price;
    }

    public unitaryTax() : bigDecimal {
        const unitaryTax = this._price.divide(new bigDecimal(100)).multiply(this._category.taxPercentage).round(2);
        return unitaryTax;
    }

    public unitaryTaxedAmount(): bigDecimal {
        const unitaryTaxedAmount = this._price.add(this.unitaryTax()).round(2);
        return unitaryTaxedAmount;
    }
}
