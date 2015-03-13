Meteor.publish('jobs', function (){
 return Jobs.find();
});

Meteor.publish('images', function () {
  return Images.find();
});

Meteor.publish('singleJob', function (_id) {
  if (Meteor.user()) {
    return Jobs.find({id: _id});
  } else{
    this.ready();
  };
});

Meteor.publish('applicationsByJob', function (_id) {
  var job = Jobs.findOne(_id);
  if (job.userId == this.userId) {
    return JobApplications.find({jobId: _id});
  } else{
    this.ready();    
  }
});

Meteor.publish('ownerJobs', function (_id) {
  if (_id == this.userId) {
    return Jobs.find({userId: _id});
  } else{
    this.ready();    
  }
});
Meteor.publish('ownerApplications', function (_id) {
  if (_id == this.userId) {
    return JobApplications.find({userid: this.userId})
  } else{
    this.ready();    
  }
});

Meteor.publish('categories', function (category) {
  return Jobs.find({category: category})
});
