/**
  * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
  * @typedef {import('moleculer').Context} Context Moleculer's Context
  */

 /** @type {ServiceSchema} */

 const addHandler = require("../functions/add.ts");
const Context = require("../Context.ts");


 module.exports = {
   name: "functions",

   /**
    * Settings
    */
   settings: {},

   /**
    * Dependencies
    */
   dependencies: [],

   /**
    * Actions
    */
   actions: {
  "add": {
    "rest": {
      "method": "POST",
      "path": "/add"
    },
    "handler": (ctx) => {const context = new Context(ctx); return addHandler(context);},
  }
},

   /**
    * Events
    */
   events: {
     // **---Add Events Here---**
   },

   /**
    * Methods
    */
   methods: {},

   /**
    * Service created lifecycle event handler
    */
   created() {},

   /**
    * Service started lifecycle event handler
    */
   async started() {},

   /**
    * Service stopped lifecycle event handler
    */
   async stopped() {},
 };
 