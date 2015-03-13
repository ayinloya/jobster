JobsApplications = new Mongo.Collection('jobsApplications');
JobsApplications.attachSchema(new SimpleSchema({
  job: {
    type: String,
    autoform: {
      omit: true,
    }
  },
  description: {
    type: String,
    label: "Description",
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 20,
        placeholder: "Why do you want this job?",
        class: "inputField"
      }
    }
  },
  file: {
    type: String,
    optional: true,
    autoform:{
      afFieldInput: {
        type: 'fileUpload',
        collection: 'Files'
      }
    }
  },
  createdAt: {
    type: Date,
    autoform: {
      omit: true
    },
    autoValue:function(){
      if (this.isInsert) {
        console.log(new Date())
        return new Date()
      } else {
        this.unset();
      }
    }
  },
  userId: {
    type: String,
    autoform: {
      omit: true
    },
    autoValue:function(){
      if (this.isInsert && Meteor.user()) {
        console.log(Meteor.userId())
        return Meteor.userId();
      } else {
        this.unset();
      }
    }
  }
}
));