"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const home_controller_1 = __importDefault(require("../controller/home.controller"));
const admin_controller_1 = __importDefault(require("../controller/admin.controller"));
const admin_controller_2 = __importDefault(require("../controller/admin.controller"));
router.get('/home', home_controller_1.default.showHome);
router.get('/admin', admin_controller_1.default.showHome);
router.get('/admin/product', admin_controller_1.default.showProducts);
router.get('/admin/user', admin_controller_1.default.showUsers);
router.get('/admin/product/edit/:id', admin_controller_2.default.showFormEdit);
router.get('/admin/product/delete/:id', admin_controller_2.default.removeProduct);
router.get('/admin/user/delete/:id', admin_controller_2.default.removeUser);
router.get('/order/:id', home_controller_1.default.showFormOrder);
router.post('/order/:id', home_controller_1.default.orderProducts);
router.get('/cart', home_controller_1.default.cart);
router.post('/admin/product/edit/:id', admin_controller_2.default.updateProduct);
router.post('/admin/product/create', admin_controller_2.default.create);
router.get('/home/pay', home_controller_1.default.payForm);
router.post('/home/pay', home_controller_1.default.pay);
exports.default = router;
//# sourceMappingURL=router.js.map