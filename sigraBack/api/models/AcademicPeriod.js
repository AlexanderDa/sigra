/**
 * AcademicPeriod.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {


    startDate: {
      type: 'ref',
      columnType: 'date',
      columnName: 'start_date'
    },

    finishDate: {
      type: 'ref',
      columnType: 'date',
      columnName: 'finish_date'
    },

    fullDate: {
      type: 'string',
      columnName: 'full_date',
      columnType: 'character varying(25)',
      maxLength: 25,
    }
  },
  attended: { //asisten
    collection: 'user',
    via: 'attends', //asiste
    through: 'attendance' //asistencia
  }

};

