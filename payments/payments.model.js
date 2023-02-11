const mongoose = require('mongoose');
const {
  v4: uuidv4
} = require("uuid");

const PaymentsSchema = new mongoose.Schema({
  "payment_id": {
    "type": "String",
    "default": function genUUID() {
      return uuidv4()
  }},
  "order_id": {
    "type": "String"
  },
  "payment_status": {
    "type": "String"
  },
  "amount": {
    "type": "String"
  },
  "method": {
    "type": "String"
  },
  "pg_payment_id": {
    "type": "String"
  },
  "pg_oder_id": {
    "type": "String"
  },
  "bank_transaction_id": {
    "type": "String"
  },
  "order_cart_id": {
    "type": "String"
  },
  "pg_payment_status": {
    "type": "String"
  },
  "pg_payment_response": {
    "type": "Object"
  },
  "pg_payment_error": {
    "type": "Object"
  },
  "pg_payment_input": {
    "type": "Object"
  },
  "pg_payment_error_code": {
    "type": "String"
  },
  "pg_payment_metadata": {
    "type": "Object"
  },
  "created_at": {
    "type": "Date",
    "default": Date.now()
  },
  "updated_at": {
    "type": "Date",
    "default": Date.now()
  }
});



const getPaymentDetails = (database) => {
    const dbConnection = mongoose.connection.useDb(database);
    return dbConnection.model('payment_details', PaymentsSchema,'payment_details');
}
module.exports = {
    getPaymentDetails
}

