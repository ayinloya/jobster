Tracker.autorun(function () {
  Meteor.subscribe('myApplications');
  Meteor.subscribe('images');
});