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
  //'GET /': { action: 'view-homepage-or-redirect' },


  //  ╔═╗╔═╗╦  ╔═╗╔╗╔╔╦╗╔═╗╔═╗╦╔╗╔╔╦╗╔═╗
  //  ╠═╣╠═╝║  ║╣ ║║║ ║║╠═╝║ ║║║║║ ║ ╚═╗
  //  ╩ ╩╩  ╩  ╚═╝╝╚╝═╩╝╩  ╚═╝╩╝╚╝ ╩ ╚═╝
  // Note that, in this app, these API endpoints may be accessed using the `Cloud.*()` methods
  // from the Parasails library, or by using those method names as the `action` in <ajax-form>.
  'GET   /api/v1/account/logout': { action: 'account/logout' },
  'PUT   /api/v1/entrance/login': { action: 'entrance/login' },
  'POST  /api/v1/entrance/signup': { action: 'entrance/signup' },





  'POST       /api/v1/faculty': { controller: 'faculty/FacultyController', action: 'createNewFaculty' },
  'PUT        /api/v1/faculty/:id': { controller: 'faculty/FacultyController', action: 'updateOneFaculty' },
  'DELETE     /api/v1/faculty/:id': { controller: 'faculty/FacultyController', action: 'deleteOneFaculty' },

  'POST       /api/v1/career': { controller: 'career/CareerController', action: 'createNewCareer' },
  'PUT        /api/v1/career/:id': { controller: 'career/CareerController', action: 'updateOneCareer' },
  'DELETE     /api/v1/career/:id': { controller: 'career/CareerController', action: 'deleteOneCareer' },


  'POST       /api/v1/period': { controller: 'period/AcademicPeriodController', action: 'createNewAcademicPeriod' },
  'PUT        /api/v1/period/:id': { controller: 'period/AcademicPeriodController', action: 'updateOneAcademicPeriod' },
  'DELETE     /api/v1/period/:id': { controller: 'period/AcademicPeriodController', action: 'deleteOneAcademicPeriod' },

  'POST       /api/v1/area': { controller: 'area/AreaController', action: 'createNewArea' },
  'PUT        /api/v1/area/:id': { controller: 'area/AreaController', action: 'updateOneArea' },
  'DELETE     /api/v1/area/:id': { controller: 'area/AreaController', action: 'deleteOneArea' },


  'POST       /api/v1/company': { controller: 'company/CompanyController', action: 'createNewCompany' },
  'PUT        /api/v1/company/:id': { controller: 'company/CompanyController', action: 'updateOneCompany' },
  'DELETE     /api/v1/company/:id': { controller: 'company/CompanyController', action: 'deleteOneCompany' },


  'POST       /api/v1/graduate': { controller: 'graduate/GraduateController', action: 'createNewGraduate' },
  'PUT        /api/v1/graduate/:id': { controller: 'graduate/GraduateController', action: 'updateOneGraduate' },
  'DELETE     /api/v1/graduate/:id': { controller: 'graduate/GraduateController', action: 'deleteOneGraduate' },

  'POST       /api/v1/job/application': { controller: 'job/JobApplicationController', action: 'createNewJobApplication' },
  'PUT        /api/v1/job/application/:id': { controller: 'job/JobApplicationController', action: 'updateOneJobApplication' },
  'DELETE     /api/v1/job/application/:id': { controller: 'job/JobApplicationController', action: 'deleteOneJobApplication' },

  'POST       /api/v1/gradute/career': { controller: 'graduate/GraduateCareerController', action: 'createNewGraduateCareer' },
  'PUT        /api/v1/gradute/career/:id': { controller: 'graduate/GraduateCareerController', action: 'updateOneGraduateCareer' },
  'DELETE     /api/v1/gradute/career/:id': { controller: 'graduate/GraduateCareerController', action: 'deleteOneGraduateCareer' },


};
