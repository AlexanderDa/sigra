/**
 * Faculty.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    description: {
      type: 'string',
      columnName: 'description',
      columnType: 'character varying(50)',
      maxLength: 50,
    },

    smallDescription: {
      type: 'string',
      columnName: 'small_description',
      columnType: 'character varying(15)',
      maxLength: 15,
    }
  }


};

