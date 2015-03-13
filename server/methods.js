Meteor.methods({
  sendEmail: function (application_id) {
  // application_id the current application id
  var application = Application.findOne(application_id);
  var applicant = Meteor.users.findOne(application.userId);
  var job = Jobs.findOne(application.job);
  var jobOwner = Meteor.users.findOne(job.userId);


  console.log(jobOwner)
  
  // Email.send({
  //   to: to,
  //   from: 'application@jobest.com',
  //   subject: 'Application pending ',
  //   text: text
  // });
}
});