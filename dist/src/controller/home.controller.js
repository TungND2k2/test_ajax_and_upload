"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Product_service_1 = __importDefault(require("../service/Product.service"));
const category_service_1 = __importDefault(require("../service/category.service"));
const user_service_1 = __importDefault(require("../service/user.service"));
const orderDetail_service_1 = __importDefault(require("../service/orderDetail.service"));
const order_service_1 = __importDefault(require("../service/order.service"));
class ProductController {
    constructor() {
        this.showHome = async (req, res) => {
            let products = await Product_service_1.default.getAll();
            res.render("./mainPage/mainPage", {
                product: products,
            });
        };
        this.showFormOrder = async (req, res) => {
            let product = await this.productService.findByIdProduct({ id: req.params.id });
            let status = await this.OrderService.findToStatus();
            res.render('./mainPage/order', { product: product, orderID: status });
        };
        this.orderProducts = async (req, res) => {
            let orderDetail = {
                status: 'buyding',
                quantity: req.body.quantity,
                productID: req.body.productID,
                orderID: req.body.orderID
            };
            let ProductNew = await this.CartService.save(orderDetail);
            res.redirect('/cart');
        };
        this.cart = async (req, res) => {
            let cart = await this.productService.getOrder();
            res.render("./mainPage/cart", { cart: cart });
        };
        this.payForm = async (req, res) => {
            res.render("./mainPage/pay");
        };
        this.pay = async (req, res) => {
            let order = await this.OrderService.findToStatus();
            let orderDetails = await this.CartService.findCart();
            let totalQuantity = 0;
            let totalMoney = 0;
            orderDetails.forEach((item) => {
                totalQuantity += item.idCategory;
                totalMoney += item.idCategory * item.nameOrderDetail;
            });
            let orderInfo = {
                quantity: totalQuantity,
                address: req.body.address,
                phone: req.body.phone,
                status: 'bought',
                totalMoney: totalMoney
            };
            let customer = await this.OrderService.updateOrder(order.id, orderInfo);
            if (customer) {
                res.redirect('/home/payOrder');
            }
            else {
                console.log(1);
            }
        };
        this.OrderService = order_service_1.default;
        this.productService = Product_service_1.default;
        this.CategoryService = category_service_1.default;
        this.UserService = user_service_1.default;
        this.CartService = orderDetail_service_1.default;
    }
}
exports.default = new ProductController();
//# sourceMappingURL=home.controller.js.map