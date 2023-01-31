import { Request, Response } from "express";
declare class ProductController {
    private productService;
    private CategoryService;
    private UserService;
    private CartService;
    private OrderService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    showFormOrder: (req: Request, res: Response) => Promise<void>;
    orderProducts: (req: Request, res: Response) => Promise<void>;
    cart: (req: Request, res: Response) => Promise<void>;
    payForm: (req: Request, res: Response) => Promise<void>;
    pay: (req: Request, res: Response) => Promise<void>;
}
declare const _default: ProductController;
export default _default;
