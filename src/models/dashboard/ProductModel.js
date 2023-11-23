const { Schema, model } = require("mongoose");

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    categoryId: {
        type: Schema.Types.ObjectId,
        ref: 'categories'
    },
    brand: { // TODO: have to dynamic like category
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true
    },
    stock: {
        type: Number,
        required: true,
        trim: true
    },
    discount: {
        type: Number,
        trim: true
    },
    rating: {
        type: Number,
        trim: true
    },
    image: {
        type: Array,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    }
},
    { timestamps: true })

// for search
productSchema.index({
    name: 'text',
    category: 'text',
    brand: 'text',
    description: 'text',
}, {
    weights: {
        name: 5,
        brand: 4,
        category: 3,
        description: 2,
    }
}

)

module.exports = model("products", productSchema)

