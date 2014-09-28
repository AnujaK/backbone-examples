//defining BirdView class
var BirdView = Backbone.View.extend({
    
   /* el: '#birdDiv',
    
    birdtpl: _.template($('#birdDivContent').html()),*/
    
    initialize: function(){
       /* console.log('BirdView');
        this.model.set('type', 'high-flyer');
        this.render();*/
    },
   
    render: function(){
        
    }
    
});

//instantiating model to be used in view
var birdModel = new BirdModel();

//instantiating BirdView
var birdView = new BirdView({model:birdModel});