const { Schema, model }  = require('mongoose')

const schema = new Schema({
    text: String,
    
    isSurvey: Boolean,
    answers: [String],
    user: {
        type: Schema.Types.ObjectId, ref: 'User',
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = model('Twito', schema, 'twitos')