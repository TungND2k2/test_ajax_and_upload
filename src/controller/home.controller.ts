import {Request, Response} from "express";
import productService from "../service/Product.service";
import CategoryService from "../service/category.service";
import UserService from "../service/user.service";
import CartService from "../service/orderDetail.service";
import orderService from "../service/order.service";

class ProductController {
    private productService;
    private CategoryService;
    private UserService;
    private CartService;
    private OrderService;
    constructor() {
        this.OrderService=orderService
        this.productService = productService;
        this.CategoryService=CategoryService
        this.UserService=UserService
        this.CartService=CartService
    }

    showHome = async (req: Request, res: Response) => {
            let products = await productService.getAll();
            res.render("./mainPage/mainPage", {
                product: products,
            });


    }
    showFormOrder = async (req: Request, res: Response) => {
        let product = await this.productService.findByIdProduct({id: req.params.id})
        let status=await this.OrderService.findToStatus()
        res.render('./mainPage/order', {product: product,orderID: status });
    }
    orderProducts = async (req: Request, res: Response) => {
        let orderDetail={
            status:'buyding',
            quantity: req.body.quantity,
            productID:req.body.productID,
            orderID:req.body.orderID
        }
        let ProductNew = await this.CartService.save(orderDetail)
        res.redirect('/cart')
    }
    cart = async (req:Request, res:Response)=>{
        let cart = await this.productService.getOrder()
            res.render("./mainPage/cart", {cart:cart});
    }
    payForm = async (req:Request, res:Response)=>{
            res.render("./mainPage/pay");
    }
    pay = async (req:Request, res:Response)=>{

        let order=await this.OrderService.findToStatus()
        let orderDetails=await this.CartService.findCart()
        let totalQuantity = 0;
        let totalMoney=0;
        orderDetails.forEach((item)=>{
            totalQuantity+=item.idCategory
            totalMoney+=item.idCategory*item.nameOrderDetail
        })
        let orderInfo={
            quantity: totalQuantity,
            address:req.body.address,
            phone:req.body.phone,
            status:'bought',
            totalMoney:totalMoney
        }
        let customer = await this.OrderService.updateOrder(order.id,orderInfo)
        if(customer){
            res.redirect('/home/payOrder')
        }else {
            console.log(1)
        }
    }

}
export default new ProductController();
