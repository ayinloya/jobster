
Template.registerHelper('isOwner',function (userid) {
  var result = Meteor.userId() === userid;
  return result;
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
  }

});




