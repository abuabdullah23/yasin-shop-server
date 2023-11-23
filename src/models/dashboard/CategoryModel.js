const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
    title: {
        type: String,
        required: true
    },
    slug: {
        type: String,
        required: true,
        unique: true
    },
    image: {
        type: String,
        required: true
    },
    // imgDeleteUrl: {
    //     type: String,
    //     required: true
    // }
}, { timestamps: true })

categorySchema.index({
    name: 'text'
})

module.exports = model('categories', categorySchema);