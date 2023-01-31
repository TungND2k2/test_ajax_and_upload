declare class OrderService {
    private orderRepository;
    constructor();
    updateOrder: (id: any, userInfo: any) => Promise<any>;
    findToStatus: () => Promise<any>;
    findToUserID: (id: any) => Promise<any>;
    orderLoad: () => Promise<any>;
}
declare const _default: OrderService;
export default _default;
