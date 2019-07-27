/**
 * cloud.setup.js
 *
 * Configuration for this Sails app's generated browser SDK ("Cloud").
 *
 * Above all, the purpose of this file is to provide endpoint definitions,
 * each of which corresponds with one particular route+action on the server.
 *
 * > This file was automatically generated.
 * > (To regenerate, run `sails run rebuild-cloud-sdk`)
 */

Cloud.setup({

  /* eslint-disable */
  methods: {"confirmEmail":{"verb":"GET","url":"/email/confirm","args":["token"]},"logout":{"verb":"GET","url":"/api/v1/account/logout","args":[]},"updatePassword":{"verb":"PUT","url":"/api/v1/account/update-password","args":["password"]},"updateProfile":{"verb":"PUT","url":"/api/v1/account/update-profile","args":["fullName","emailAddress"]},"updateBillingCard":{"verb":"PUT","url":"/api/v1/account/update-billing-card","args":["stripeToken","billingCardLast4","billingCardBrand","billingCardExpMonth","billingCardExpYear"]},"login":{"verb":"PUT","url":"/api/v1/entrance/login","args":["emailAddress","password","rememberMe"]},"signup":{"verb":"POST","url":"/api/v1/entrance/signup","args":["emailAddress","password","fullName"]},"sendPasswordRecoveryEmail":{"verb":"POST","url":"/api/v1/entrance/send-password-recovery-email","args":["emailAddress"]},"updatePasswordAndLogin":{"verb":"POST","url":"/api/v1/entrance/update-password-and-login","args":["password","token"]},"deliverContactFormMessage":{"verb":"POST","url":"/api/v1/deliver-contact-form-message","args":["emailAddress","topic","fullName","message"]},"createNewFaculty":{"verb":"POST","url":"/api/v1/faculty"},"updateOneFaculty":{"verb":"PUT","url":"/api/v1/faculty/:id"},"deleteOneFaculty":{"verb":"DELETE","url":"/api/v1/faculty/:id"},"createNewCareer":{"verb":"POST","url":"/api/v1/career"},"updateOneCareer":{"verb":"PUT","url":"/api/v1/career/:id"},"deleteOneCareer":{"verb":"DELETE","url":"/api/v1/career/:id"},"createNewAcademicPeriod":{"verb":"POST","url":"/api/v1/period"},"updateOneAcademicPeriod":{"verb":"PUT","url":"/api/v1/period/:id"},"deleteOneAcademicPeriod":{"verb":"DELETE","url":"/api/v1/period/:id"},"createNewArea":{"verb":"POST","url":"/api/v1/area"},"updateOneArea":{"verb":"PUT","url":"/api/v1/area/:id"},"deleteOneArea":{"verb":"DELETE","url":"/api/v1/area/:id"},"createNewCompany":{"verb":"POST","url":"/api/v1/company"},"updateOneCompany":{"verb":"PUT","url":"/api/v1/company/:id"},"deleteOneCompany":{"verb":"DELETE","url":"/api/v1/company/:id"},"createNewGraduate":{"verb":"POST","url":"/api/v1/graduate"},"updateOneGraduate":{"verb":"PUT","url":"/api/v1/graduate/:id"},"deleteOneGraduate":{"verb":"DELETE","url":"/api/v1/graduate/:id"},"createNewJobApplication":{"verb":"POST","url":"/api/v1/job/application"},"updateOneJobApplication":{"verb":"PUT","url":"/api/v1/job/application/:id"},"deleteOneJobApplication":{"verb":"DELETE","url":"/api/v1/job/application/:id"},"createNewGraduateCareer":{"verb":"POST","url":"/api/v1/gradute/career"},"updateOneGraduateCareer":{"verb":"PUT","url":"/api/v1/gradute/career/:id"},"deleteOneGraduateCareer":{"verb":"DELETE","url":"/api/v1/gradute/career/:id"}}
  /* eslint-enable */

});
