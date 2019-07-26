/**
 * Area.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    name: {
      type: 'string',
      columnType: 'character varying(150)',
      maxLength: 150,
    }

  },

};

