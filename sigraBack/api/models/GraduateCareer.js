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
      columnName: 'career_start_date'
    },

    careerFinishDate: {
      type: 'ref',
      columnType: 'date',
      columnName: 'career_finish_date'
    },

    graduationDate: {
      type: 'ref',
      columnType: 'date',
      columnName: 'career_graduation_date'
    },

    gradeScore: {
      type: 'number',
      columnType: 'real',
      columnName: 'grade_score'
    },

    senescytRecord: {
      type: 'string',
      columnName: 'senecyt_record',
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

