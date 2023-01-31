"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const product_model_1 = require("../model/product.model");
class ProductService {
    constructor() {
        this.getAll = async () => {
            let sql = 'select p.id, p.name, p.price, p.image, c.id as idCategory, c.name as nameCategory from product p join category c on p.category = c.id';
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.getOrder = async () => {
            let sql = 'select p.id, p.name, p.price, p.image as idCategory, o.quantity,o.status as nameOrderDetail from product p join order_detail o on p.id = o.productID';
            let products = await this.productRepository.query(sql);
            return products;
        };
        this.save = async (product) => {
            return this.productRepository.save(product);
        };
        this.findByIdProduct = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id.id });
            return product;
        };
        this.updateProduct = async (id, newProduct) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.update({ id: id }, newProduct);
        };
        this.remove = async (id) => {
            let product = await this.productRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.productRepository.remove({ id: id });
        };
        this.productRepository = data_source_1.AppDataSource.getRepository(product_model_1.Product);
    }
}
exports.default = new ProductService();
//# sourceMappingURL=Product.service.js.map