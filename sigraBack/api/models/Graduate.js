/**
 * Student.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    lastName: {
      type: 'string',
      columnName: 'last_name',
      columnType: 'character varying(25)',
      maxLength: 25,
    },

    firstName: {
      type: 'string',
      columnName: 'first_Name',
      columnType: 'character varying(25)',
      maxLength: 25,
    },

    address: {
      type: 'string',
      columnType: 'character varying(200)',
      maxLength: 200,
    },

    telephone: {
      type: 'string',
      unique: true,
      columnType: 'character varying(15)',
      maxLength: 15,
    },

    mobile: {
      type: 'string',
      unique: true,
      columnType: 'character varying(15)',
      maxLength: 15,
    },

    email: {
      type: 'string',
      unique: true,
      isEmail: true,
      columnType: 'character varying(40)',
      maxLength: 40,
    },

    fbAccount: {
      type: 'string',
      columnName: 'fb_account',
      columnType: 'character varying(150)',
      maxLength: 150,
    },

    twitterAccount: {
      type: 'string',
      columnName: 'twitter_account',
      columnType: 'character varying(150)',
      maxLength: 150,
    }

  },
  applies: { //Aplica
    collection: 'company',
    via: 'recruit', //recluta
    through: 'graduateCompany'
  }
};

