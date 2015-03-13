// Jobs._dropCollection()

// isOwner=function(userId) {
//   console.log(Meteor.userId);
//   return Meteor.userId === userId;
// }

Accounts.onLogin(function(attempt){
    // Resets the number of failed login attempts
    console.log('login success')
    console.log(attempts)
    this.next()
  });