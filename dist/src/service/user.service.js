"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const User_model_1 = require("../model/User.model");
class UserService {
    constructor() {
        this.getAll = async () => {
            let products = await this.userRepository.find();
            return products;
        };
        this.findOneUser = async (username) => {
            let product = await this.userRepository.findBy({ username: username });
            return product;
        };
        this.updateUser = async (id, userInfo) => {
            let product = await this.userRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.userRepository.update({ id: id }, userInfo);
        };
        this.save = async (user) => {
            return this.userRepository.save(user);
        };
        this.findById = async (id) => {
            let product = await this.userRepository.findById({ id: id });
            return product;
        };
        this.remove = async (id) => {
            let product = await this.userRepository.findOneBy({ id: id });
            if (!product) {
                return null;
            }
            return this.userRepository.remove({ id: id });
        };
        this.userRepository = data_source_1.AppDataSource.getRepository(User_model_1.User);
    }
}
exports.default = new UserService();
//# sourceMappingURL=user.service.js.map