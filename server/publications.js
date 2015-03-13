Meteor.publish('jobs', function() {
  console.log('itssssss')
  return Jobs.find();
});