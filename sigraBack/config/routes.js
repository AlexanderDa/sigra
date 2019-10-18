/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  //  ╦ ╦╔═╗╔╗ ╔═╗╔═╗╔═╗╔═╗╔═╗
  //  ║║║║╣ ╠╩╗╠═╝╠═╣║ ╦║╣ ╚═╗
  //  ╚╩╝╚═╝╚═╝╩  ╩ ╩╚═╝╚═╝╚═╝
  //'GET /':  'PagesController.main' ,
  //'GET /': { view: 'index', locals: { layout: false } },



  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  'GET   /api/v1/account/logout': { action: 'account/logout' },
  'PUT   /api/v1/entrance/login': { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup': { action: 'entrance/signup' },




  'GET        /api/v1/faculty':'faculty/FacultyController.getAll',
  'POST       /api/v1/faculty': { controller: 'faculty/FacultyController', action: 'createNewFaculty' },
  'PUT        /api/v1/faculty/:id': { controller: 'faculty/FacultyController', action: 'updateOneFaculty' },
  'DELETE     /api/v1/faculty/:id': { controller: 'faculty/FacultyController', action: 'deleteOneFaculty' },

  'GET        /api/v1/career': 'career/CareerController.getAll',
  'POST       /api/v1/career': { controller: 'career/CareerController', action: 'createNewCareer' },
  'PUT        /api/v1/career/:id': { controller: 'career/CareerController', action: 'updateOneCareer' },
  'DELETE     /api/v1/career/:id': { controller: 'career/CareerController', action: 'deleteOneCareer' },


  'GET        /api/v1/period': 'period/AcademicPeriodController.getAll',
  'POST       /api/v1/period': { controller: 'period/AcademicPeriodController', action: 'createNewAcademicPeriod' },
  'PUT        /api/v1/period/:id': { controller: 'period/AcademicPeriodController', action: 'updateOneAcademicPeriod' },
  'DELETE     /api/v1/period/:id': { controller: 'period/AcademicPeriodController', action: 'deleteOneAcademicPeriod' },

  'GET        /api/v1/area': 'area/AreaController.getAll',
  'POST       /api/v1/area': { controller: 'area/AreaController', action: 'createNewArea' },
  'PUT        /api/v1/area/:id': { controller: 'area/AreaController', action: 'updateOneArea' },
  'DELETE     /api/v1/area/:id': { controller: 'area/AreaController', action: 'deleteOneArea' },


  'GET        /api/v1/company': 'company/CompanyController.getAll',
  'POST       /api/v1/company': { controller: 'company/CompanyController', action: 'createNewCompany' },
  'PUT        /api/v1/company/:id': { controller: 'company/CompanyController', action: 'updateOneCompany' },
  'DELETE     /api/v1/company/:id': { controller: 'company/CompanyController', action: 'deleteOneCompany' },


  'GET        /api/v1/graduate': 'graduate/GraduateController.getAll',
  'POST       /api/v1/graduate': { controller: 'graduate/GraduateController', action: 'createNewGraduate' },
  'PUT        /api/v1/graduate/:id': { controller: 'graduate/GraduateController', action: 'updateOneGraduate' },
  'DELETE     /api/v1/graduate/:id': { controller: 'graduate/GraduateController', action: 'deleteOneGraduate' },

  'GET        /api/v1/job/application': 'job/JobApplicationController.getAll',
  'POST       /api/v1/job/application': { controller: 'job/JobApplicationController', action: 'createNewJobApplication' },
  'PUT        /api/v1/job/application/:id': { controller: 'job/JobApplicationController', action: 'updateOneJobApplication' },
  'DELETE     /api/v1/job/application/:id': { controller: 'job/JobApplicationController', action: 'deleteOneJobApplication' },

  'GET        /api/v1/gradute/career': 'graduate/GraduateCareerController.getAll',
  'POST       /api/v1/gradute/career': { controller: 'graduate/GraduateCareerController', action: 'createNewGraduateCareer' },
  'PUT        /api/v1/gradute/career/:id': { controller: 'graduate/GraduateCareerController', action: 'updateOneGraduateCareer' },
  'DELETE     /api/v1/gradute/career/:id': { controller: 'graduate/GraduateCareerController', action: 'deleteOneGraduateCareer' },


};
