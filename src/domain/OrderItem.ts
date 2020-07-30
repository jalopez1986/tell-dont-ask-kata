import Product from "./Product";
import bigDecimal from "js-big-decimal";

export default class OrderItem {
    constructor(private _product: Product, private _quantity: number ) {
    }

    get product(): Product {
        return this._product;
    }

    get quantity(): number {
        return this._quantity;
    }

    get taxedAmount(): bigDecimal {
        return this._product.unitaryTaxedAmount().multiply(new bigDecimal(this._quantity)).round(2);
    }

    get tax(): bigDecimal {
        return this._product.unitaryTax().multiply(new bigDecimal(this._quantity));
    }
}
