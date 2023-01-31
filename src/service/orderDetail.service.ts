import {AppDataSource} from "../data-source";
import {OrderDetail} from "../model/orderDetail.model";

class OrderDetailService {
    private cartRepository
    constructor() {
        this.cartRepository=AppDataSource.getRepository(OrderDetail)
    }

    getAll = async () => {
        let cart = await this.cartRepository.find()
        return cart;
    }

    findCart = async () => {

        let sql='select o.id, o.quantity as idCategory,  p.price as nameOrderDetail from order_detail o join product p on p.id = o.productID'
        let products = await this.cartRepository.query(sql)
        return products;
    }
    removeCart = async (id) => {
        let product = await  this.cartRepository.findOneBy({orderID: id});
        if (!product) {
            return null;
        }
        return  this.cartRepository.remove({orderID: id});
    }
    save = async (product) => {
        return  this.cartRepository.save(product);
    }
    updateUser= async (id, userInfo) => {
        let product = await this.cartRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return this.cartRepository.update({id: id}, userInfo);
    }

}
export default new OrderDetailService();