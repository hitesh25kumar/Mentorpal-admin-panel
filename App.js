const AdminJS = require('adminjs')
const AdminJSExpress = require('@adminjs/express')
const express = require('express')
const mongoose = require("mongoose");
const AdminJSMongoose = require("@adminjs/mongoose");
const routes = require('./routes');


const PORT = 3000

AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
  })

  //login details
const DEFAULT_ADMIN = {
    email: 'tech@mentorpal.ai',
    password: 'techmentorpal@12345',
  }

  // handle authentication
const authenticate = async (email, password) => {
    //condition to check for correct login details
    if (email === DEFAULT_ADMIN.email && password === DEFAULT_ADMIN.password) {
      //if the condition is true
      return Promise.resolve(DEFAULT_ADMIN)
    }
    //if the condition is false
    return null
  }

const startAdminJS = async () => {
  const app = express()

  const mongooseDB = await mongoose
  .connect(
    "mongodb+srv://admin-panel-backend:dB28zY9stEkITf8w@cluster0.rzrkdvm.mongodb.net/?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => console.log("database connected"))
  .catch((err) => console.log(err));


const adminOptions = {
    rootPath: "/admin",
    resources: routes(mongooseDB),
  };

  const admin = new AdminJS(adminOptions);

  const adminRouter = AdminJSExpress.buildAuthenticatedRouter(
    admin,
    {
      authenticate,
      cookieName: "AdminJS",
      cookiePassword: "Secret",
    },
    null,
    {
      store: mongooseDB,
      resave: true,
      saveUninitialized: true,
      secret: 'Secret',
      name: 'adminjs',
    }
  );
  
  app.use(admin.options.rootPath, adminRouter)

  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}, AdminJS server started on URL: http://localhost:${PORT}${admin.options.rootPath}`)
  })
}

startAdminJS()


