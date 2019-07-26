/**
 * Career.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    name: {
      type: 'string',
      columnType: 'character varying(50)',
      maxLength: 50,
    },

    smallDescription: {
      type: 'string',
      columnName: 'small_description',
      columnType: 'character varying(10)',
      maxLength: 10,
    }



  },

};

