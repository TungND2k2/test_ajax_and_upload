"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const order_model_1 = require("../model/order.model");
class OrderService {
    constructor() {
        this.updateOrder = async (id, userInfo) => {
            let product = await this.orderRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.orderRepository.update({ id: id }, userInfo);
        };
        this.findToStatus = async () => {
            let product = await this.orderRepository.findOneBy({ status: 'loading' });
            if (!product) {
                return null;
            }
            return product;
        };
        this.findToUserID = async (id) => {
            let product = await this.orderRepository.findOneBy({ userID: id });
            if (!product) {
                return null;
            }
            return product;
        };
        this.orderLoad = async () => {
            let sql = `INSERT INTO ishop.order (status) VALUES ('loading')`;
            return this.orderRepository.query(sql);
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(order_model_1.Order);
    }
}
exports.default = new OrderService();
//# sourceMappingURL=order.service.js.map