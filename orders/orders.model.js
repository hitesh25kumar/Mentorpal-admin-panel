const mongoose = require('mongoose');
const {
  v4: uuidv4
} = require("uuid");

const OrdersSchema = new mongoose.Schema({
  "order_id":{
    "type": "String",
    "default": function genUUID() {
      return uuidv4()
  }},
  "pg_order_id":{
    "type": "String"
  },
  "pg_payment_id":{
    "type": "String"
  },
  "payment_status":{
    "type": "String"
  },
  "amount": {
    "type": "Number"
  },
  "currency": {
    "type": "String"
  },
  "receipt": {
    "type": "String"
  },
  "notes": {
      "type": "Object"
  },
  "mentee_id": {
    "type": "String"
  },
  "mentor_id": {
    "type": "String"
  },
  "product_id": {
    "type": "String"
  },
    "entity": {
    "type": "String"
  },
  "amount": {
    "type": "Number"
  },
  "amount_paid": {
    "type": "Number"
  },
  "amount_due": {
    "type": "Number"
  },
  "offer_id": {
    "type": "Mixed"
  },
  "status": {
    "type": "String"
  },
  "attempts": {
    "type": "Number"
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
const Orders = mongoose.model('orders', OrdersSchema,'orders');


const getOrders = (database) => {
    const dbConnection = mongoose.connection.useDb(database);
    return dbConnection.model('orders', OrdersSchema,'orders');
}
module.exports = {
    getOrders
}

