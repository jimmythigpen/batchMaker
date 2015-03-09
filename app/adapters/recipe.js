import ajax from 'ic-ajax';
import Ember from 'ember';

export default Ember.Object.extend({
  find: function(name, id){
    return ajax("https://api.parse.com/1/classes/Recipes/" + id).then(function(recipe){
      recipe.id = recipe.objectId;
      delete recipe.objectId;
      return recipe;
  });
},

  findAll: function() {
     return ajax("https://api.parse.com/1/classes/Recipes").then(function(response){
       return response.results.map(function(recipe) {
         recipe.id = recipe.objectId;
         delete recipe.objectId;
         return recipe;
       });
     });
   },
});
