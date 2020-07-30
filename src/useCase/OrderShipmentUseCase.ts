import OrderRepository from "../repository/OrderRepository";
import ShipmentService from "../service/ShipmentService";
import OrderShipmentRequest from "./OrderShipmentRequest";

export default class OrderShipmentUseCase {
    private readonly _orderRepository: OrderRepository;
    private readonly _shipmentService: ShipmentService;

    constructor(orderRepository: OrderRepository, shipmentService: ShipmentService) {
        this._orderRepository = orderRepository;
        this._shipmentService = shipmentService;
    }

    public run(request: OrderShipmentRequest): void {
        const order = this._orderRepository.getById(request.orderId);

        order.ship();

        this._shipmentService.ship(order);

        this._orderRepository.save(order);
    }

}
