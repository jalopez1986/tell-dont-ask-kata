import OrderRepository from "../repository/OrderRepository";
import OrderApprovalRequest from "./OrderApprovalRequest";

export default class OrderApprovalUseCase {
    private readonly _orderRepository: OrderRepository;

    constructor(orderRepository: OrderRepository) {
        this._orderRepository = orderRepository;
    }

    public run(request: OrderApprovalRequest): void {
        const order = this._orderRepository.getById(request.orderId);

        if (request.approved) {
            order.approve();
        } else {
            order.reject()
        }

        this._orderRepository.save(order);
    }
}
