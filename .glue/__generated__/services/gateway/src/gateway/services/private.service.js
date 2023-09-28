/**
  * @typedef {import('moleculer').ServiceSchema} ServiceSchema Moleculer's Service Schema
  * @typedef {import('moleculer').Context} Context Moleculer's Context
  */

 /** @type {ServiceSchema} */

 const Context = require("../Context.ts");


 module.exports = {
   name: "private",

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
   actions: {},

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
 