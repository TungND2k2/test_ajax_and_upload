declare class OrderDetailService {
    private cartRepository;
    constructor();
    getAll: () => Promise<any>;
    findCart: () => Promise<any>;
    removeCart: (id: any) => Promise<any>;
    save: (product: any) => Promise<any>;
    updateUser: (id: any, userInfo: any) => Promise<any>;
}
declare const _default: OrderDetailService;
export default _default;
