import {AppDataSource} from "../data-source";
import {Category} from "../model/category.model";

class CategoryService {
    private categoryRepository
    constructor() {
        this.categoryRepository=AppDataSource.getRepository(Category)
    }

    getAll = async () => {
        let category = await this.categoryRepository.find()
        return category;
    }
}
export default new CategoryService();