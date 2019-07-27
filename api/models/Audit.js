/**
 * Audit.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    tableName: {
      type: 'string',
      columnName: 'table_name',
      columnType: 'character varying(20)',
      maxLength: 20,
    },

    date: {
      type: 'ref',
      columnType: 'timestamp',
      //defaultsTo: 'current_timestamp',
    },

    action: {
      type: 'string',
      columnType: 'character varying(15)',
      maxLength: 15,
    },

    description: {
      type: 'string'
    },

    user: {
      model: 'user',
      columnName: 'userid',
      required: true
    },
  },

};

