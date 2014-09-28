//defining AnimalView class
var ChildView = Backbone.View.extend({
    
    el: '#childDiv',
    
    initialize: function(){
       // this.render();
    },
   
    render: function(){
        this.$el.append("Child View");
        return this;
    }
    
});
