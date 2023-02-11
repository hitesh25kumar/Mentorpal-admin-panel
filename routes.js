const AdminJS = require('adminjs')

const {
    getUsers
} = require("./users/users.model");
const {
    getOrders
} = require('./orders/orders.model');
const {
    getBookingSlots
} = require('./booking-slots/booking-slots.model');
const {
    getPaymentDetails
} = require('./payments/payments.model');
const {getEmailTemplate} = require('./email-templates/email-templates.model');

// const Components = require('./components/custom-component')


const routes = (mongooseDB) => {
    const UsersResourceOptions = {
        databases: [mongooseDB],
        resource: getUsers('UAT_AUTH'),
        // options: {
        //     properties:{
        //         emailBody:{
        //             list:Components,
        //         }
        //     }
        // //   listProperties: ['id', 'name', 'createdAt'],
        // //   filterProperties: ['id', 'name', 'createdAt'],
        // //   editProperties: ['id', 'name', 'bio', 'createdAt'],
        // //   showProperties: ['id', 'name', 'bio', 'createdAt'],
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
    const PaymentDetailsResourceOptions = {
        databases: [mongooseDB],
        resource: getPaymentDetails('payment'),
    };
    const EmailTemplateResourceOptions = {
        databases: [mongooseDB],
        resource: getEmailTemplate('email-service'),
    };
    return [UsersResourceOptions, OrdersResourceOptions, BookingSlotsResourceOptions,PaymentDetailsResourceOptions,EmailTemplateResourceOptions]
}

module.exports = routes;