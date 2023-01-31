import {AppDataSource} from "../data-source";
import {Order} from "../model/order.model";

class OrderService {
    private orderRepository

    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order)
    }
    updateOrder= async (id, userInfo) => {
        let product = await this.orderRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return this.orderRepository.update({id: id}, userInfo);
    }
    findToStatus = async () => {
        let product = await this.orderRepository.findOneBy({status : 'loading'})
        if (!product){
            return null
        }
        return product;
    }
    findToUserID= async (id) => {
        let product = await this.orderRepository.findOneBy({userID : id})
        if (!product){
            return null
        }
        return product;
    }
    orderLoad = async () => {
        let sql = `INSERT INTO ishop.order (status) VALUES ('loading')`
        return  this.orderRepository.query(sql);}
    }
export default new OrderService();