import Ember from 'ember';


export default Ember.Controller.extend({
  recipeType: ["Breakfast", "Lunch", "Dinner", "Deserts", "Snacks"],
  ingredientsUnit: ["cups", "ounces", "teaspoons", "tablespoons", "pounds"],

  steps: [
    {
      ingredients: [{}]
    }
  ],

  actions: {
    saveRecipe: function(){
      var data = this.getProperties('name', "author", "type", "prepTime", "cookTime", "cookTemp", "notes", "yieldNumber", "yieldName", "steps");
      var _this = this;
      console.log(JSON.stringify(data));
      Ember.$.ajax({
        url: "https://api.parse.com/1/classes/Recipes",
        type: "POST",
        data: JSON.stringify(data),
        contentType: 'application/json'
      }).done(function() {
        _this.transitionToRoute('recipes.index');
      });
  },

    addStep: function(){
      this.get('steps').addObject({ingredients: [{}]});
  },
}

});
