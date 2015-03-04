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
      var data = {
      "name": this.get('recipe.name'),
      "author": this.get('recipe.author'),
      "type": this.get('recipe.type'),
      "prepTime": this.get('recipe.prepTime'),
      "cookTime": this.get('recipe.cookTime'),
      "cookTemp": this.get('recipe.cookTemp'),
      "notes": this.get('recipe.notes'),
      "yieldNumber": this.get('recipe.yieldNumber'),
      "yieldName": this.get('recipe.yieldName'),
      "steps":[{
          "stepNumber": 1,
          "ingredients":
            [{
              "amount": this.get('ingredients.amount'),
              "unit": this.get('ingredients.unit'),
              "name": this.get('ingredients.name'),
            }],
              "directions": this.get('recipe.directions'),
          }],
    };
    console.log(data);
    }
  }

});
