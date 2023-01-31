import { Request, Response } from "express";
declare class AdminController {
    private ProductService;
    private CategoryService;
    private UserService;
    constructor();
    showHome: (req: Request, res: Response) => Promise<void>;
    showProducts: (req: Request, res: Response) => Promise<void>;
    showUsers: (req: Request, res: Response) => Promise<void>;
    create: (req: Request, res: Response) => Promise<void>;
    showFormEdit: (req: Request, res: Response) => Promise<void>;
    updateProduct: (req: Request, res: Response) => Promise<void>;
    removeProduct: (req: Request, res: Response) => Promise<void>;
    removeUser: (req: Request, res: Response) => Promise<void>;
}
declare const _default: AdminController;
export default _default;
