import {Request, Response} from "express";
import ProductService from "../service/product.service";
import CategoryService from "../service/category.service";
import UserService from "../service/user.service";

class AdminController {
    private ProductService;
    private CategoryService;
    private UserService;

    constructor() {
        this.ProductService = ProductService;
        this.CategoryService = CategoryService
        this.UserService = UserService
    }

    showHome = async (req: Request, res: Response) => {
        try {
            res.status(200).json({});
        } catch (err) {

        }
    }
    showProducts = async (req: Request, res: Response) => {
            let products = await this.ProductService.getAll();
            if (products) {
                res.status(200).json(products)
            }



    }
    showUsers = async (req: Request, res: Response) => {
        let users = await this.UserService.getAll();
        res.render("./admin/user", {user: users});

    }


    create = async (req: Request, res: Response) => {
        let productNew = req.body;
        let createProduct = await this.ProductService.save(productNew)
        if (createProduct) {
            res.status(200).json({
                message: "Create product success",
            });

        }
    }


    showFormEdit = async (req: Request, res: Response) => {
        let product = await this.ProductService.findByIdProduct({id: req.params.id})
        if (product) {
            res.status(200).json(product)
        }

    }

    updateProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        let product = await this.ProductService.findByIdProduct({id: req.params.id})
        let newProduct = req.body;
        let update = await this.ProductService.updateProduct(id, newProduct);
        if (update){

            res.status(200).json({message: "updated successfully"})
        }
    }

    removeProduct = async (req: Request, res: Response) => {
        let id = req.params.id;
        console.log(id)
        let product = await this.ProductService.remove(id);
        if (product) {
            res.status(200).json({
                message: "delete product success",
            });
        }
    }
    removeUser = async (req: Request, res: Response) => {
        let id = req.params.id;
        let user = await this.UserService.findOne({_id: id});
        let userRemove = await this.UserService.remove(user);
        res.redirect(301, '/admin/user');
    }


}

export default new AdminController();