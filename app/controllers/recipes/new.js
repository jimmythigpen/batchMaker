import Ember from 'ember';


export default Ember.Controller.extend({
  recipeType: ["Breakfast", "Lunch", "Dinner", "Deserts", "Snacks"],
  ingredientsUnit: ["cups", "ounces", "teaspoons", "tablespoons", "pounds"],

  recipe: {},

  steps: [
    {
      ingredients: [{}]
    }
  ],

  actions: {
    saveRecipe: function(){
      var data = this.getProperties('name', "author", "type", "prepTime", "cookTime", "cookTemp", "notes", "yieldNumber", "yieldName", "steps");
      console.log(JSON.stringify(data));
  },

      addStep: function(){
        this.get('steps').addObject({ingredients: [{}]});
  },
}

});
