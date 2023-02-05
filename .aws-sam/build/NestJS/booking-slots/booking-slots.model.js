const mongoose = require('mongoose');

const BookingSlotsSchema = new mongoose.Schema({
  "mentor_id":{
    "type": "String"
  },
  "mentee_id":{
    "type": "String"
  },
  "order_id":{
    "type": "String"
  },
  "status": {
    "type": "String"
  },
  "booked_id": {
    "type": "String"
  },
  "time": {
    "type": "Date"
  },
  "temporary_ttl": {
    "type": "Date"
  }
});


const getBookingSlots = (database) => {
    const dbConnection = mongoose.connection.useDb(database);
    return dbConnection.model('booked_slot', BookingSlotsSchema,'booked_slot');
}
module.exports = {
    getBookingSlots
}

