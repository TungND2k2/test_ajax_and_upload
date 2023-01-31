"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const orderDetail_model_1 = require("../model/orderDetail.model");
class OrderDetailService {
    constructor() {
        this.getAll = async () => {
            let cart = await this.cartRepository.find();
            return cart;
        };
        this.findCart = async () => {
            let sql = 'select o.id, o.quantity as idCategory,  p.price as nameOrderDetail from order_detail o join product p on p.id = o.productID';
            let products = await this.cartRepository.query(sql);
            return products;
        };
        this.removeCart = async (id) => {
            let product = await this.cartRepository.findOneBy({ orderID: id });
            if (!product) {
                return null;
            }
            return this.cartRepository.remove({ orderID: id });
        };
        this.save = async (product) => {
            return this.cartRepository.save(product);
        };
        this.updateUser = async (id, userInfo) => {
            let product = await this.cartRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.cartRepository.update({ id: id }, userInfo);
        };
        this.cartRepository = data_source_1.AppDataSource.getRepository(orderDetail_model_1.OrderDetail);
    }
}
exports.default = new OrderDetailService();
//# sourceMappingURL=orderDetail.service.js.map