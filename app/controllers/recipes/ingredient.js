import Ember from 'ember';

export default Ember.Controller.extend({

  actions: {
    addIngredient: function() {
      console.log(this);
      this.get('model.ingredients').addObject({});
    },
  }
});
