export default class SellItemRequest {

    constructor(private _productName: string, private _quantity: number) {
    }

    get quantity(): number {
        return this._quantity;
    }


    get productName(): string {
        return this._productName;
    }
}
