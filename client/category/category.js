Category =[ {
  name: "Mobile developer"
},
{
  name: "Web developer"
},
{name: "Computer Networking"},
{name: "Repairs"},
{name: "Business developer"},
{name: "Communication helper"},
{name: "Other"}
]



Template.category.helpers({
  category: function () {
    return Category;
  }
});