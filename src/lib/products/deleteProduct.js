const ProductModel = require("../../models/dashboard/ProductModel");

const deleteProduct = async (req, res) => {
    const productId = req.params.id;
    try {
        const result = await ProductModel.findByIdAndDelete(productId);
        res.status(200).send({ success: true, message: 'Delete product successful' })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }

}

module.exports = deleteProduct;