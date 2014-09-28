//defining MyModel class here
var MyModel = Backbone.Model.extend({
      defaults: {
        name: 'Anuja',
        description: 'BootSimply'
      }
    });
//class definition ended

//instantiating MyModel class here
var myModel =  new MyModel();

//setting properties

//console.log("Getting name = "+myModel.get('name'));
//console.log("Getting description = "+myModel.get('description'));

myModel.set('designation','Director');
//console.log("Getting designation = "+myModel.get('designation'));

console.log('Model value is = '+JSON.stringify(myModel.toJSON()));

myModel.clear();
console.log('Model value is = '+JSON.stringify(myModel.toJSON()));
