Meteor.methods({
  addJob: function (title, location, description, requirements, otherSkills, contact,url,category) {
    Jobs.insert({
      title: title,
      location: location,
      description: description,
      requirements:requirements,
      otherSkills: otherSkills,
      contact: contact,
      url: url,
      category: category,
      createdAt: new Date()
    });
  },

  findJob: function (job) {
   jobSearch =  Jobs.find({title: job, description: job, category: job}, { sort: {createdAt: -1}})
   return jobSearch;
 }
});