let mongoose = require('mongoose')
    Schema = mongoose.Schema;
    
let eventSchema = Schema([{
    capacity: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    activationDay: {
        type: Date,
        required: false
    },
    calendarInfo: {
        title: {
            type: String,
            required: true
        },
        allDay: false,
        start: {
            type: Date,
            required: true
        },
        end: {
            type: Date,
            required: true
        }
    }
}])

module.exports = mongoose.model('Event', eventSchema)
