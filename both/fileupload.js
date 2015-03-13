var fileStore = new FS.Store.GridFS("files", {});
Files = new FS.Collection("files", {
  stores: [fileStore]
})