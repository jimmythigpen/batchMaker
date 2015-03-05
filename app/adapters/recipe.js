import ajax from 'ic-ajax';
import Ember from 'ember';


export default Ember.Object.extend({
  findAll: function() {
     return ajax("https://api.parse.com/1/classes/Recipes").then(function(response){
       return response.results.map(function(recipe) {
         recipe.id = recipe.objectId;
         delete recipe.objectId;
         console.log(recipe);
         return recipe;
       });
     });
   },

   findRecipe: function(id){
     return ajax("https://api.parse.com/1/classes/Recipes/" + '1BKYr15qt6').then(function(response){
      response.id = response.objectId;
      delete response.objectId;
      return response;

  });
},

});
