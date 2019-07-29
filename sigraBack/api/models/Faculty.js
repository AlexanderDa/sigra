/**
 * Faculty.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      columnType: 'character varying(75)',
      maxLength: 75,
    },

    smallName: {
      type: 'string',
      columnName: 'small_name',
      columnType: 'character varying(15)',
      maxLength: 15,
    }
  }


};

