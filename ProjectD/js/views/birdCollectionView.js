//defining BirdCollectionView class
var BirdCollectionView = Backbone.View.extend({
    
    el: '#birdDiv',
    
    birdtpl: _.template($('#birdDivContent').html()),
    
    initialize: function(){
        this.render();
    },
   
    render: function(){
        var birdCollectionModel = this.model;
        
        var self = this;
        
        //.toArray() needed because underscore's foreach cannot loop on 'Collection'
        _.each(birdCollectionModel.toArray(), function(localBirdModel, i){
            localBirdModel.set('type', 'big');
            
            self.$el.append(self.birdtpl(localBirdModel.toJSON()));
            
            console.log("Value  : "+ JSON.stringify(localBirdModel.toJSON()));
        });
        return this;
    }
    
});


var birdCollection = new BirdCollection();

birdCollection.add(new BirdModel());
birdCollection.add(new BirdModel());
birdCollection.add(new BirdModel());
birdCollection.add(new BirdModel());

console.log("Bird Collection = "+JSON.stringify(birdCollection.toJSON()));

var birdCollectionView = new BirdCollectionView({model:birdCollection});