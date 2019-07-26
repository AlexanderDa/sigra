/**
 * Graduate.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    careerStartDate: {
      type: 'ref',
      columnType: 'date',
    },

    careerFinishDate: {
      type: 'ref',
      columnType: 'date',
    },

    graduationDate: {
      type: 'ref',
      columnType: 'date',
    },

    gradeScore: {
      type: 'number',
      columnType: 'real'
    },

    senescytRecord: {
      type: 'string',
      unique: true,
      columnType: 'character varying(25)',
      maxLength: 25,
    },

    graduated: {
      model: 'graduate',
      required: true,
    },

    academicPeriod: {
      model: 'academicperiod',
      columnName: 'period',
      required: true,
    },

    faculty: {
      model: 'faculty',
      required: true,
    },
    career: {
      model: 'career',
      required: true,
    }

  },

};

