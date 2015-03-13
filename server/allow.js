Jobs.allow({
  insert: function (userId, doc) {
    // is signed in?
    if (userId) {
      return true;
    };
  },
  update: function (userId, doc, fields, modifier) {
    // is signed in?
    // is owner of document
    if (userId && (userId===doc.owner)) {
      return true;
    };
  },
  remove: function (userId, doc) {
    //...
    if (userId===doc.owner) {
      return true;
    };
  }
});
JobsApplications.allow({
  insert: function (userId, doc) {
    // is signed in?
    if (userId) {
      return true;
    };
  },
  update: function (userId, doc, fields, modifier) {
    // is signed in?
    return false;
  },
  remove: function (userId, doc) {
    //...
    return false;
  }
});

Images.allow({
  insert: function (userId, doc) {
    //...
    return true;
  },
  update: function (userId, doc, fields, modifier) {
    //...
    return true;
  },
  remove: function (userId, doc) {
    //...
    return true;
  },
  download: function () {
    //...
    return true;
  }
});