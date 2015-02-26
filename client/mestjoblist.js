
Template.registerHelper('isOwner',function (userid) {
  var result = Meteor.userId();
  return result;
});
Template.registerHelper('msg', function() {
  return msg;
});


AutoForm.hooks({
  updateJobsForm: {

    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      alert(operation);
      Router.go('jobList')
    },

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "submit", or the method name.
    onError: function(operation, error, template) {
      alert(error);
    }
  },
  insertJobsForm: {

    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      msg = "New job successfully created"
      Router.go('jobList')
    },

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "submit", or the method name.
    onError: function(operation, error, template) {
      msg = "Please fill in the fields highlighted"
    }
  },
  insertJobsApplication: {

    // Called when any operation succeeds, where operation will be
    // "insert", "update", "submit", or the method name.
    onSuccess: function(operation, result, template) {
      msg = "New job successfully created"
      Router.go('jobList')
    },

    // Called when any operation fails, where operation will be
    // "validation", "insert", "update", "submit", or the method name.
    onError: function(operation, error, template) {
      msg = "Please fill in the fields highlighted"
    },
    formToDoc: function(doc, ss, formId) {
      doc.job = Router.current().params._id;
      return doc;
    }
  }

});




