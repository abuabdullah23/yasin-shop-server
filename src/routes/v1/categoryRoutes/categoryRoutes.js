const { getAllCategories, getSingleCategory } = require('../../../api/v1/controllers/categoriesController');

const router = require('express').Router();

router.get('/get-categories', getAllCategories);
router.get('/category-details/:id', getSingleCategory);

module.exports = router;