import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addIngredient: function() {
      this.get('model.ingredients').addObject();
    },
  }
});
