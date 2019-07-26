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

    tableName: { type: 'string' },

    date: {
      type: 'ref',
      columnType: 'timestamp',
      defaultsTo: 'current_timestamp',
    },

    acction: {
      type: 'string',
      columnType: 'character varying(15)',
      maxLength: 15,
    },

    description: {
      type: 'string',
      columnType: 'character varying(250)',
      maxLength: 250,
    },

    user: {
      model: 'user',
      columnName: 'userid',
      required: true
    },
  },

};

