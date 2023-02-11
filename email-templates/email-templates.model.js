const mongoose = require('mongoose');

const EmailTemplateSchema = new mongoose.Schema({
  "emailBody": {
    "type": "String"
  },
  "slug": {
    "type": "String"
  },
  "subject": {
    "type": "String"
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



const getEmailTemplate = (database) => {
    const dbConnection = mongoose.connection.useDb(database);
    return dbConnection.model('email-template', EmailTemplateSchema,'email-template');
}
module.exports = {
    getEmailTemplate
}

