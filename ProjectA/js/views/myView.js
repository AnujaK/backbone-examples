// definition of MyView class
var MyView = Backbone.View.extend({

  el:'#myDiv',
    
  mytpl: _.template($('#myDivContent').html()),
    
  initialize: function () {
	console.log("Inside initialize function");	
	this.render();
  },
 
  render: function() {
    console.log("Inside render function");
    
    //prepare json data
    var jsonData = this.model.toJSON();
    
    //populate template with json data
    var populatedTpl = this.mytpl(jsonData);
    
    //embed populated template to el
     this.$el.html(populatedTpl);

    return this;
  }
});

//creating another instance of MyModel
var myModel2 =  new MyModel();

//instantiating MyView class
var myView = new MyView({model: myModel2});