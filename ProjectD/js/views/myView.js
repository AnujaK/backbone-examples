// definition of MyView class
var MyView = Backbone.View.extend({

//el is defined by backbone
  el:'#myDiv',
    
//mytpl is our own variable name for underscore-template
  mytpl: _.template($('#myDivContent').html()),   

//events is defined by backbone
  events: {
      "click #changeNameButton" : "btnHandler"
    },
    
  initialize: function () {
	console.log("Inside initialize function");	
	this.render();
    },
 
  render: function() {
    console.log("Inside render function  ");
    
    //prepare json data
    var jsonData = this.model.toJSON();
    
    //populate template with json data
    var populatedTpl = this.mytpl(jsonData);
    
    //embed populated template to el using html() as this.$el.html(populatedTpl);
    
    //replacing html with append function so that rest of the components in view are displayed
    // this.$el.append(populatedTpl);
    //refreshing only the myDiv2 data part
    this.$el.find('#myDiv2').html(populatedTpl);

    return this;
    },
    
 btnHandler : function(){
        //alert("Button clicked ");
        var newName = this.$el.find('#newName').val();
        this.model.set('name',newName);
        this.render();
        animalView.$el.append(this.mytpl(this.model.toJSON()));
    }
});

//creating another instance of MyModel
var myModel2 =  new MyModel();

//instantiating MyView class
var myView = new MyView({model: myModel2});