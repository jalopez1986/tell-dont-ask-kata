import OrderItem from "./OrderItem";
import OrderStatus from "./OrderStatus";
import bigDecimal from "js-big-decimal";

export default class Order {
    private _total: bigDecimal;
    private _currency: string;
    private _items: OrderItem[];
    private _tax: bigDecimal;
    private _status: OrderStatus;
    private _id: number;


    constructor() {
        this._items = [];
        this._currency = "EUR";
        this._total = new bigDecimal("0.00");
        this._tax = new bigDecimal("0.00");
    }

    get total(): bigDecimal {
        return this._total;
    }

    get currency(): string {
        return this._currency;
    }

    get items(): OrderItem[] {
        return this._items;
    }

    get tax(): bigDecimal {
        return this._tax;
    }

    get status(): OrderStatus {
        return this._status;
    }

    set status(value: OrderStatus) {
        this._status = value;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    public addOrderItem(orderItem: OrderItem) {
        this._total = this._total.add(orderItem.taxedAmount);
        this._tax = this._tax.add(orderItem.tax);
        this._items.push(orderItem);
    }

    public approve() {
        if (this._status === OrderStatus.SHIPPED) {
            throw new ShippedOrdersCannotBeChangedException();
        }

        if (this._status === OrderStatus.REJECTED) {
            throw new RejectedOrderCannotBeApprovedException();
        }

        this._status = OrderStatus.APPROVED;
    }


    public reject() {
        if (this._status === OrderStatus.SHIPPED) {
            throw new ShippedOrdersCannotBeChangedException();
        }

        if (this._status === OrderStatus.APPROVED) {
            throw new ApprovedOrderCannotBeRejectedException();
        }

        this._status = OrderStatus.REJECTED;
    }

    public ship(){
        if (this._status === OrderStatus.CREATED || this._status === OrderStatus.REJECTED) {
            throw new OrderCannotBeShippedException();
        }

        if (this._status == OrderStatus.SHIPPED) {
            throw new OrderCannotBeShippedTwiceException();
        }

        this._status = OrderStatus.SHIPPED;
    }
}


//TODO: Tiene que ser con implements si es extends, fallan los test.

export class ShippedOrdersCannotBeChangedException implements Error {
    message: string;
    name: string;
}
export class RejectedOrderCannotBeApprovedException implements Error {
    message: string;
    name: string;
}
export class ApprovedOrderCannotBeRejectedException implements Error {
    message: string;
    name: string;
}
export class OrderCannotBeShippedException implements Error {
    message: string;
    name: string;
}
export class OrderCannotBeShippedTwiceException implements Error {
    message: string;
    name: string;
}

