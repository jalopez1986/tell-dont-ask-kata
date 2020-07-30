import OrderRepository from "../repository/OrderRepository";
import ProductCatalog from "../repository/ProductCatalog";
import SellItemsRequest from "./SellItemsRequest";
import Order from "../domain/Order";
import UnknownProductException from "./exceptions/UnknownProductException";
import OrderItem from "../domain/OrderItem";
import OrderStatus from "../domain/OrderStatus";
import SellItemRequest from "./SellItemRequest";

export default class OrderCreationUseCase {
    private readonly _orderRepository: OrderRepository;
    private readonly _productCatalog: ProductCatalog;

    constructor(orderRepository: OrderRepository, productCatalog: ProductCatalog) {
        this._orderRepository = orderRepository;
        this._productCatalog = productCatalog;
    }

    public run(request: SellItemsRequest): void {
        let order = new Order();
        order.status = OrderStatus.CREATED;   //TODO: Es mejor tener un builder o static factory o ObjectMother?

        for (let itemRequest of request.requests) {
            const orderItem = this.createOrderItem(itemRequest);
            order.addOrderItem(orderItem);
        }

        this._orderRepository.save(order);
    }

    private createOrderItem(itemRequest: SellItemRequest): OrderItem {
        let product = this._productCatalog.getByName(itemRequest.productName);
        if (product === undefined) { throw new UnknownProductException() }

        return new OrderItem(product, itemRequest.quantity);
    }
}
