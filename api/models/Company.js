/**
 * Company.js
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
      columnType: 'character varying(10)',
      maxLength: 10,
      columnName: 'small_name'
    },

    address: { type: 'string' },

    telephone: {
      type: 'string',
      columnType: 'character varying(15)',
      maxLength: 15,
    },

    email: {
      type: 'string',
      columnType: 'character varying(40)',
      maxLength: 40,
      unique: true,
      isEmail: true
    },

    contact: {
      type: 'string',
      columnType: 'character varying(75)',
      maxLength: 75,
    },

    isPrivate: {
      type: 'boolean',
      columnName: 'is_private'
    },

    area: {
      model: 'area',
      required: true
    },
  },

  recruit: {//recluta
    collection: 'graduate',
    via: 'applies',//aplica
    through: 'CompanyGraduate'// asistencia
  },
};

