import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['recipes/recipe'],
  scaledAmount: function(){
    return Number(this.get('model.amount')) * Number(this.get('controllers.recipes/recipe.scaleMult'));
  }.property('model.amount', 'controllers.recipes/recipe.scaleMult')
});
