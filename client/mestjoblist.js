var msg = ""

Template.registerHelper('isOwner',function (userid) {
  var result = Meteor.userId();
  return result;
});
/*
Template.registerHelper('getImageUrl',function (_id) {
  return Images.findOne(_id).url();
});
*/
Template.registerHelper('getFile',function (_id) {
  return Files.findOne(_id).url();
});

Template.jobdetails.events({
  'click .btn-delete': function () {
    // ...
    console.log('jobdetails log: ' + this.id)
    var _id = this._id;
    Jobs.remove(_id);
  }
});
Template.jobItem.events({
  'click .btn-delete': function () {
    // ...
    console.log('dashboard log: ' + this.id)
    var _id = this._id;
    Jobs.remove(_id);
  }
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
      msg = "You have successfully applied to " + Jobs.findOne(Router.current().params._id).title;
      console.log('onSuccess')
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




