import { Router } from 'express';

const router = Router();


import ProductController from "../controller/home.controller";
import AdminController from "../controller/admin.controller";
import adminController from "../controller/admin.controller";


router.get('/home', ProductController.showHome)
router.get('/admin' ,AdminController.showHome)
router.get('/admin/product' ,AdminController.showProducts)
router.get('/admin/user' ,AdminController.showUsers)
router.get('/admin/product/edit/:id',adminController.showFormEdit)
router.get('/admin/product/delete/:id',adminController.removeProduct)
router.get('/admin/user/delete/:id',adminController.removeUser)
router.get('/order/:id',ProductController.showFormOrder)
router.post('/order/:id',ProductController.orderProducts)
router.get('/cart',ProductController.cart)
router.post('/admin/product/edit/:id',adminController.updateProduct)
router.post('/admin/product/create',adminController.create)
router.get('/home/pay',ProductController.payForm)
router.post('/home/pay',ProductController.pay)

export default router;