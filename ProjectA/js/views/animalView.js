//defining AnimalView class
var AnimalView = Backbone.View.extend({
    
    el: '#animalDiv',
    
    initialize: function(){
        console.log('AnimalView ');
        this.model.set('type', 'wild');
        this.render();
    },
   
    render: function(){
        this.$el.html(JSON.stringify(this.model.toJSON()));
        return this;
    }
    
});

//instantiating model to be used in view
var animalModel = new AnimalModel();

//instantiating AnimalView
var animalView = new AnimalView({model:animalModel});