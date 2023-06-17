const mongoose = require('mongoose')

const contactSchema = mongoose.Schema(
    {
    name: {
        type: String,
        required: [true, 'Set name for contact'],
    },
    email: {
        type: String,
        unique: [true, 'Duplicated email..'],
    },
    phone: {
        type: String,
    },
    favorite: {
        type: Boolean,
        default: false,
    },
    },
    {
        versionKey: false
    }
    )

const Contact = mongoose.model('Contact', contactSchema)

module.exports = Contact;
