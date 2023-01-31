"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const product_service_1 = __importDefault(require("../service/product.service"));
const category_service_1 = __importDefault(require("../service/category.service"));
const user_service_1 = __importDefault(require("../service/user.service"));
class AdminController {
    constructor() {
        this.showHome = async (req, res) => {
            try {
                res.status(200).json({});
            }
            catch (err) {
            }
        };
        this.showProducts = async (req, res) => {
            let products = await this.ProductService.getAll();
            if (products) {
                res.status(200).json(products);
            }
        };
        this.showUsers = async (req, res) => {
            let users = await this.UserService.getAll();
            res.render("./admin/user", { user: users });
        };
        this.create = async (req, res) => {
            let productNew = req.body;
            let createProduct = await this.ProductService.save(productNew);
            if (createProduct) {
                res.status(200).json({
                    message: "Create product success",
                });
            }
        };
        this.showFormEdit = async (req, res) => {
            let product = await this.ProductService.findByIdProduct({ id: req.params.id });
            if (product) {
                res.status(200).json(product);
            }
        };
        this.updateProduct = async (req, res) => {
            let id = req.params.id;
            let product = await this.ProductService.findByIdProduct({ id: req.params.id });
            let newProduct = req.body;
            let update = await this.ProductService.updateProduct(id, newProduct);
            if (update) {
                res.status(200).json({ message: "updated successfully" });
            }
        };
        this.removeProduct = async (req, res) => {
            let id = req.params.id;
            console.log(id);
            let product = await this.ProductService.remove(id);
            if (product) {
                res.status(200).json({
                    message: "delete product success",
                });
            }
        };
        this.removeUser = async (req, res) => {
            let id = req.params.id;
            let user = await this.UserService.findOne({ _id: id });
            let userRemove = await this.UserService.remove(user);
            res.redirect(301, '/admin/user');
        };
        this.ProductService = product_service_1.default;
        this.CategoryService = category_service_1.default;
        this.UserService = user_service_1.default;
    }
}
exports.default = new AdminController();
//# sourceMappingURL=admin.controller.js.map