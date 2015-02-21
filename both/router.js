Router.configure({
  layoutTemplate: 'masterLayout',
  notFoundTemplate: '404',
  loadingTemplate: 'loading',
  routeControllerNameConverter: "camelCase"
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
  data: function() {
    return {
      jobs: Jobs.find().fetch()
    }
  }}
  );
Router.route('/jobList/:category',function() {
  this.render('jobList')
},
{
  name: 'jobCategory',
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
  data: function() {
    console.log(Jobs.findOne(this.params._id))
    return {
      jobs: Jobs.findOne(this.params._id)
    }
  }
}
);

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



