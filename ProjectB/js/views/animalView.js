//defining AnimalView class
var AnimalView = Backbone.View.extend({
    
    el: '#animalDiv',
    
    animaltpl: _.template($('#animalDivContent').html()),
    
    initialize: function(){
        console.log('AnimalView ');
        this.model.set('type', 'wild');
        this.render();
    },
   
    render: function(){
        //prepare json data
        var animalJSON = this.model.toJSON();
        
        //populate json data to template
        var populatedAnimaltpl = this.animaltpl(animalJSON);
        
        //embed populated template to el
        this.$el.html(populatedAnimaltpl);
        return this;
    }
    
});

//instantiating model to be used in view
var animalModel = new AnimalModel();

//instantiating AnimalView
var animalView = new AnimalView({model:animalModel});