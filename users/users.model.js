const mongoose = require('mongoose');
const UsersSchema = new mongoose.Schema({
    name :{
      type: "String",
      required: true,
    },
    mobile: {
      type: "Object",
    },
    dob: {
      type: "String",
    },
    profession: {
      type: "String",
    },
    about: {
      type: "String",
    },
    goals: {
      type: "String",
    },
    address: {
      type: "String",
      required: true,
    },
    gender: {
      type: "String",
    },
    language: {
      type: [],
    },
    photo: {
      type: "String",
    },
    user_type: {
      type: "String",
  
    },
    user_id: {
      type: "String",
    },
    social_id: {
      type: "String",
    },
    social_type: {
      type: "String",
    },
    code: {
      type: "String"
    },
    is_default: {
      type: "Boolean",
    },
    is_active: {
      type: "Boolean",
      default: true,
    },
    is_locked: {
      type: "Boolean",
      default: false,
    },
    created_by: {
      type: "String",
    },
    last_modified_at: {
      type: Date,
      default: Date.now,
    },
    email: {
      type: "Object",
      default: {
        email: "",
        unique: true,
        required: true,
      },
    },
    phone: {
      type: "Object",
    },
    last_successful_attempt_at: {
      type: Date,
      default: Date.now,
    },
    last_attempt_at: {
      type: Date,
      default: Date.now,
    },
    career_advice:{
      type: [],
    }, 
    company_or_school: {
      type: "String",
    }, 
    experience: {
      type: "String",
    },
    experties:{
      type: [],
    },
    country:{
      type: "String",
    },
    job_search:{
      type: [],
    },
    skills:{
      type: [],
    },
    leadership:{
      type: [],
    },
    linkedin_url:{
      type: "String",
    },
    mentorship:{
      type: [],
    },
    profile_photo:{
      type: "String",
    },
    story:{
      type: "String",
    },
    title:{
      type: "String",
    },
    price_per_session:{
      type: "String",
    },
    status: {
      type: "String",
      enum: ['Signup','Registered','Onhold','Activated','Deactivated'],
      default: 'Signup'
    }
  });


const getUsers = (database) => {
    const dbConnection = mongoose.connection.useDb(database);
    return dbConnection.model('users', UsersSchema,'users');
}
module.exports = {
    getUsers
}

