declare class ProductService {
    private productRepository;
    constructor();
    getAll: () => Promise<any>;
    getOrder: () => Promise<any>;
    save: (product: any) => Promise<any>;
    findByIdProduct: (id: any) => Promise<any>;
    updateProduct: (id: any, newProduct: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
}
declare const _default: ProductService;
export default _default;
