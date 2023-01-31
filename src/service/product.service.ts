import {AppDataSource} from "../data-source";
import {Product} from "../model/product.model";

class ProductService {
    private productRepository
    constructor() {
        this.productRepository= AppDataSource.getRepository(Product)
    }

    getAll = async () => {
        let sql ='select p.id, p.name, p.price, p.image, c.id as idCategory, c.name as nameCategory from product p join category c on p.category = c.id'
        let products = await this.productRepository.query(sql)
        return products;
    }
    getOrder = async () => {
        let sql ='select p.id, p.name, p.price, p.image as idCategory, o.quantity,o.status as nameOrderDetail from product p join order_detail o on p.id = o.productID'
        let products = await this.productRepository.query(sql)
        return products;
    }


    save = async (product) => {
        return this.productRepository.save(product);
    }

    findByIdProduct = async (id) => {
        let product = await this.productRepository.findOneBy({id: id.id});
        return product;
    }

    updateProduct = async (id, newProduct) => {
        let product = await this.productRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return this.productRepository.update({id: id}, newProduct);
    }

    remove = async (id) => {
        let product = await  this.productRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return  this.productRepository.remove({id: id});
    }
}

export default  new ProductService();