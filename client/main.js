// isOwner =function (userid) {
//   var result = Meteor.userId() === userid;
//   return result;
// }


Accounts.ui.config({
  passwordSignupFields: 'USERNAME_AND_OPTIONAL_EMAIL'
});
