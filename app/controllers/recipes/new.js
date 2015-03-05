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
    //   var data = {
    //   "name": this.get('recipe.name'),
    //   "author": this.get('recipe.author'),
    //   "type": this.get('recipe.type'),
    //   "prepTime": this.get('recipe.prepTime'),
    //   "cookTime": this.get('recipe.cookTime'),
    //   "cookTemp": this.get('recipe.cookTemp'),
    //   "notes": this.get('recipe.notes'),
    //   "yieldNumber": this.get('recipe.yieldNumber'),
    //   "yieldName": this.get('recipe.yieldName'),
    //   "steps":[{
    //       "stepNumber": 1,
    //
    //         "directions": this.get('recipe.directions'),
    //       }],
    // };
    console.log(JSON.stringify(data));
  },

      addStep: function(){
        // var ingredients = [{
        //   "amount": this.get('ingredient.amount'),
        //   "unit": this.get('ingredient.unit'),
        //   "name": this.get('ingredient.name'),
        // }];
        // console.log(ingredients);
        this.get('steps').addObject({ingredients: [{}]});
  },
}

});
