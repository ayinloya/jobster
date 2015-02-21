// isOwner=function(userId) {
//   console.log(Meteor.userId);
//   return Meteor.userId === userId;
// }


Template.jobList.helpers({
  isOwner: function (userid) {
    var result =Meteor.userId() === userid;
    return result;
  }
});



  // counter starts at 0
  Session.setDefault('counter', 0);

  // Template.jobList.helpers({
  //   jobs: function () {
  //     return Jobs.find();
  //   }
  // });


  /*Template.body.events({
    'submit .addJob': function (event,template) {
      event.preventDefault();
    Jobs.update({selector}, {modifier}, callback);
      return false;
    }
  });*/
// AutoForm.addHooks('insertJobsForm', {
//   onSubmit: function (doc) {
//     console.log("Only this onSubmit");
//   }
// }, true);


// AutoForm.hooks({
//   insertJobsForm: {
//     onSubmit: function (insertDoc, updateDoc, currentDoc) {
//       console.log("this should show")
//       this.done();

//       return false;
//     }
//   }
// });


