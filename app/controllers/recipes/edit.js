import Ember from 'ember';

export default Ember.Controller.extend({
  recipeType: ["Breakfast", "Lunch", "Dinner", "Deserts", "Snacks"],
  ingredientsUnit: ["cups", "ounces", "teaspoons", "tablespoons", "pounds"],

  actions: {
    saveRecipe: function(){
      var model = this.get('model');
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/Recipes/" + this.model.id,
        type: "PUT",
        data: JSON.stringify(model),
        contentType: 'application/json'
      });
    },
    delete: function(){
      var model = this.get('model');
      var _this = this;
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/Recipes/" + model.id,
        type: "DELETE",
      }).done(function(){
        _this.transitionToRoute('recipes.index');
      });
    },
    addStep: function(){
      this.get('model.steps').addObject({ingredients: [{}]});
    }
  }
});
