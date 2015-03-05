import Ember from 'ember';

export default Ember.Route.extend({
  model: function(){
      console.log('findAll router is running');
      return this.store.findAll('recipe');
  },
});
