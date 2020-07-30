export default class OrderShipmentRequest {
    constructor(private _orderId: number) {}

    get orderId(): number {
        return this._orderId;
    }
}
