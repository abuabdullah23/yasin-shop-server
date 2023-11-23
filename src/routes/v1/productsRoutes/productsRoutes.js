const { getAllProducts, getSingleProduct, getCategoryProducts, addProduct, updateProduct, deleteProduct } = require('../../../api/v1/controllers/productsController');

const router = require('express').Router();

router.get('/get-all-products', getAllProducts);
router.get('/product-details/:id', getSingleProduct);
router.get('/get-category-products', getCategoryProducts);
router.post('/add-product', addProduct);
router.put('/update-product/:id', updateProduct);
router.delete('/delete-product/:id', deleteProduct);

module.exports = router;