var OnBeforeActions;
Router.configure({
  layoutTemplate: 'masterLayout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading',
  routeControllerNameConverter: "camelCase"
});

OnBeforeActions = {
  loginRequired: function (pause) {
    console.log("document ready fun is here");

    if ( Meteor.user() || Meteor.loggingIn()) {

      this.next()
    }
    else{
      Router.go('home');
    }
    
  }
};
Router.onBeforeAction(OnBeforeActions.loginRequired, {
  only: ['newJob', 'usersJob', 'editJob']
});


Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/jobList',function() {
  this.render('jobList')
},
{
  name: 'jobList',
  waitOn: function() {
    return [
    Meteor.subscribe('jobs')
    ]
  },
  data: function() {
    return {
      jobs: Jobs.find().fetch()
    }
  }
});
Router.route('/jobList/:category',function() {
  this.render('jobList')
},
{
  name: 'jobCategory',
  waitOn: function() {
    var category = this.params.category
    return [
    Meteor.subscribe('categories',category)
    ]
  },
  data: function() {
    return {                        // Return only documents with the category in the parameters
      jobs: Jobs.find({category: this.params.category}).fetch(),
      pageTitle: 'Category: ' + this.params.category
    }
  } 
}
);

Router.route('/insertJobsForm',function() {
  this.render('insertJobsForm')
},
{
  name: 'newJob'
}
);

Router.route('/jobList/details/:_id',function() {
  this.render('jobdetails')
},
{
  name: 'jobDetails',

  waitOn: function() {
    var _id = this.params._id
    return [
    Meteor.subscribe('singleJob', _id),
    Meteor.subscribe('applicatinsByJob', _id)
    ]
  },
  data: function() {
    return {
      job: Jobs.findOne(this.params._id),
      jobApplications: JobsApplications.find({job: this.params._id}).fetch()
    }
  }
});

Router.route('/jobList/:userId/jobs',function() {
  this.render('usersJob')

},
{
  name: 'usersJob',
  data: function() {
    console.log('')
    return {
      jobs: Jobs.find({userId: this.params.userId}).fetch()
    }
  }
}
);

Router.route('jobList/:_id/edits', function() {
  this.render('updateJobsForm')
},
{
  name: 'editJob',
  data: function() {

    return {
      job: Jobs.findOne(this.params._id)
    }
  }
}
);

Router.route('jobList/:_id/apply', function() {
  this.render('insertJobsApplication')
},
{
  name: 'applyJob',
  data: function() {

    return {
      job: Jobs.findOne(this.params._id)
    }
  }
}
);
Router.route('jobList/:_id/submissions', function() {
  this.render('jobSumissions')
},
{
  name: 'viewApplications',
  data: function() {

    conso = {Jobs: Jobs.findOne(this.params._id),
      jobApplications: JobsApplications.find({id: this.params._id}).fetch()}

      return {
        job: Jobs.findOne(this.params._id),
        jobApplications: JobsApplications.find({job: this.params._id}).fetch()
      }
    }
  }
  );
Router.route('/dashboard', function() {
  this.render('dashboard')
},
{
  name: 'dashboard',
  waitOn: function() {
    return Meteor.subscribe('ownerJobs', Meteor.userId())
    
  },
  data: function() {
    console.log(Jobs.find({userId: Meteor.userId()}).fetch())
    return {
      jobs: Jobs.find({userId: Meteor.userId()}).fetch()
    }
  }
}
);
