import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
    return Ember.RSVP.hash({
      recipes: this.store.findAll('recipe'),
    });
  },
  setupController: function(controller, model){
   controller.set('model', model.recipes);

 }
});
