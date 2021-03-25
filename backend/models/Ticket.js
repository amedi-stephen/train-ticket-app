const mongoose = require("mongoose");
const ticket = require("./Traveller");
const { Schema } = mongoose;

const ticketSchema = new Schema({
    source: String,
    destination: String,
    departureTime: Date,
    departureDate: Date,
    traveller: {
        type: Schema.Types.ObjectId,
        ref: "Traveller"
    },
    seatNumber: [Number],
    coachNumber: Number
});

const Ticket = mongoose.model("ticket", ticketSchema);
module.exports = ticket;