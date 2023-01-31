import {AppDataSource} from "../data-source";
import {User} from "../model/User.model";


class UserService {
    private userRepository
    constructor() {
        this.userRepository=AppDataSource.getRepository(User)
    }

    getAll = async () => {
        let products = await this.userRepository.find()
        return products;

    }
    findOneUser = async (username) => {
        let product = await this.userRepository.findBy({username : username});
        return product;
    }
    updateUser= async (id, userInfo) => {
        let product = await this.userRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return this.userRepository.update({id: id}, userInfo);
    }
    save = async (user) => {
        return  this.userRepository.save(user);
    }
    findById = async (id) => {
        let product = await this.userRepository.findById({id: id});
        return product;
    }

    remove = async (id) => {
        let product = await  this.userRepository.findOneBy({id: id});
        if (!product) {
            return null;
        }
        return  this.userRepository.remove({id: id});
    }

}
export default new UserService();