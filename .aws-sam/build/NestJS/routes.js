const {
    getUsers
} = require("./users/users.model");
const {
    getOrders
} = require('./orders/orders.model');
const {
    getBookingSlots
} = require('./booking-slots/booking-slots.model');


const routes = (mongooseDB) => {
    const UsersResourceOptions = {
        databases: [mongooseDB],
        resource: getUsers('UAT_AUTH'),
        // options: {
        //   listProperties: ['id', 'name', 'createdAt'],
        //   filterProperties: ['id', 'name', 'createdAt'],
        //   editProperties: ['id', 'name', 'bio', 'createdAt'],
        //   showProperties: ['id', 'name', 'bio', 'createdAt'],
        // },
    };

  

    const OrdersResourceOptions = {
        databases: [mongooseDB],
        resource: getOrders('payment'),
    };

    const BookingSlotsResourceOptions = {
        databases: [mongooseDB],
        resource: getBookingSlots('payment'),
    };
    return [UsersResourceOptions, OrdersResourceOptions, BookingSlotsResourceOptions]
}

module.exports = routes;