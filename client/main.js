  $(document).ready(function() {
    $(".button-collapse").sideNav();
  });
  Meteor.subscribe('jobs');
  Template.job.helpers({
    jobs: function () {
      console.log(Jobs.find({sort: {createdAt: -1}}));
      return Jobs.find({},{sort: {createdAt: -1}});
    }
  });


  Template.body.events({

    "submit .jobSearch": function (event) {
      event.preventDefault();
    // This function is called when the new task form is submitted

    var text = $('.searchField').val();


    // Clear form
    

    // Prevent default form submit
    return false;
  }

})

  Template.addjobs.events({
   'submit .addJobForm': function (event, template) {
    event.preventDefault();

    var title =  $('.title').val();;
    var  location=  $('.location').val();
    var description=  $('.description').val();
    var  requirements=  $('.requirements').val();
    var  otherSkills=  $('.otherSkills').val();
    var contact=  $('.contact').val();
    var url=  $('.url').val();
    var category=  $('.category').val();

    Jobs.insert({title:title, location:location, description: description, requirements:requirements, otherSkills:otherSkills, contact:contact,url:url,category:category});
    $('input[type=text]').val('');
    return false;
  }

});