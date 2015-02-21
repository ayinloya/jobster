Jobs = new Mongo.Collection('jobs');


Jobs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  contact: {
    type: String,
    label: "Contact"
  },
  description: {
    type: String,
    label: "Description",
    optional: true,
    max: 1000
  },
  dueDate: {
    type: Date,
    label: "Due date",
    min: 0
  },
  createdAt: {
    type: Date,
    autoValue:function(){
      if (this.isInsert) {
        console.log(new Date())
        return new Date()
      } else {
        this.unset();
      }
    }
  },
  category: {
    type: String,
    allowedValues: ['web','android','repairs','comms','business','other'],
    autoform: {
      afFieldInput: {
        type: "select",
        class: "ak"
      },
      options: [
      {label: "Web Development",value: "web"},
      {label: "Android App Development",value: "android"},
      {label: "Laptop Repairs",value: "repairs"},
      {label: "Communications expert",value: "comms"},
      {label: "Business expert",value: "business"},
      {label: "Other",value: "other"}
      ]
    }
  },

  userId: {
    type: String,
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


