declare class UserService {
    private userRepository;
    constructor();
    getAll: () => Promise<any>;
    findOneUser: (username: any) => Promise<any>;
    updateUser: (id: any, userInfo: any) => Promise<any>;
    save: (user: any) => Promise<any>;
    findById: (id: any) => Promise<any>;
    remove: (id: any) => Promise<any>;
}
declare const _default: UserService;
export default _default;
