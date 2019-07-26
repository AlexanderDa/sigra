/**
 * GraduateCompany.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    vinculationDate: {
      type: 'ref',
      columnType: 'date',
    },
    unlinkDate: {
      type: 'ref',
      columnType: 'date',
    },


    graduate: {
      model: 'graduate',
      required: true,
    },

    company: {
      model: 'company',
      required: true,
    }



  },

};

