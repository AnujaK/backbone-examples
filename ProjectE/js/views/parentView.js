//defining AnimalView class
var ParentView = Backbone.View.extend({
    
    el: '#parentDiv',
    
    initialize: function(){
        this.render();
    },
   
    render: function(){
        this.$el.append("Parent View");
        childView.render();
        return this;
    }
    
});

var childModel = new ChildModel();
var childView = new ChildView({model:childModel});

var parentView = new ParentView();