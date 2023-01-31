"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data_source_1 = require("../data-source");
const category_model_1 = require("../model/category.model");
class CategoryService {
    constructor() {
        this.getAll = async () => {
            let category = await this.categoryRepository.find();
            return category;
        };
        this.categoryRepository = data_source_1.AppDataSource.getRepository(category_model_1.Category);
    }
}
exports.default = new CategoryService();
//# sourceMappingURL=category.service.js.map